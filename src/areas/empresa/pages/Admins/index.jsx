import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import LoggedHeader from '../../../../components/LoggedHeader';
import CpfInput from '../../../../components/CpfInput';
import Input from '../../../../components/Input';
import PhoneInput from '../../../../components/PhoneInput';
import Button from '../../../../components/Button';
import { companyAdminService } from '../../../../services/companyAdminService';

const pageStyle = {
  minHeight: '100vh',
  background:
    'radial-gradient(900px 420px at 8% 2%, #dff7ec 0%, transparent 60%), linear-gradient(160deg, #f5fbf8 0%, #eef5f2 100%)',
  paddingTop: '90px',
};

const containerStyle = {
  width: 'min(980px, 95%)',
  margin: '0 auto',
  display: 'grid',
  gap: '16px',
  paddingBottom: '24px',
};

const cardStyle = {
  background: '#ffffff',
  borderRadius: '14px',
  border: '1px solid rgba(15, 46, 47, 0.14)',
  boxShadow: '0 12px 28px rgba(15, 46, 47, 0.08)',
  padding: '18px',
};

const itemRowStyle = {
  border: '1px solid rgba(15, 46, 47, 0.14)',
  borderRadius: '10px',
  padding: '12px',
  display: 'grid',
  gap: '10px',
};

const badgeStyle = {
  display: 'inline-flex',
  padding: '4px 10px',
  borderRadius: '999px',
  background: '#e7f8ef',
  color: '#11754e',
  fontSize: '12px',
  fontWeight: 700,
};

const sectionTitleStyle = {
  marginTop: 0,
  marginBottom: '10px',
  color: '#123134',
};

const AdminsPage = () => {
  const [company, setCompany] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [associateEmail, setAssociateEmail] = useState('');

  const adminForm = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      password: '',
    },
  });

  const employeeForm = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      password: '',
    },
  });

  const loadAllData = async () => {
    try {
      setLoading(true);

      const [adminsResponse, employeesResponse] = await Promise.all([
        companyAdminService.list(),
        companyAdminService.listEmployees(),
      ]);

      setCompany(adminsResponse.company || employeesResponse.company || null);
      setAdmins(adminsResponse.admins || []);
      setEmployees(employeesResponse.employees || []);
    } catch (error) {
      alert(error?.response?.data?.message || 'Nao foi possivel carregar os dados da empresa.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const createAdmin = async (formData) => {
    try {
      setSaving(true);
      await companyAdminService.add(formData);
      adminForm.reset();
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao criar administrador.');
    } finally {
      setSaving(false);
    }
  };

  const associateExistingAdmin = async () => {
    if (!associateEmail.trim()) {
      alert('Informe o e-mail para associar.');
      return;
    }

    try {
      setSaving(true);
      await companyAdminService.add({ email: associateEmail.trim() });
      setAssociateEmail('');
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao associar administrador.');
    } finally {
      setSaving(false);
    }
  };

  const setPrimary = async (adminUserId) => {
    try {
      setSaving(true);
      await companyAdminService.setPrimary(adminUserId);
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao trocar administrador principal.');
    } finally {
      setSaving(false);
    }
  };

  const removeAdmin = async (adminUserId) => {
    try {
      setSaving(true);
      await companyAdminService.remove(adminUserId);
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao remover administrador.');
    } finally {
      setSaving(false);
    }
  };

  const createEmployee = async (formData) => {
    try {
      setSaving(true);
      await companyAdminService.addEmployee(formData);
      employeeForm.reset();
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao criar funcionario.');
    } finally {
      setSaving(false);
    }
  };

  const removeEmployee = async (employeeUserId) => {
    try {
      setSaving(true);
      await companyAdminService.removeEmployee(employeeUserId);
      await loadAllData();
    } catch (error) {
      alert(error?.response?.data?.message || 'Erro ao remover funcionario.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={pageStyle}>
      <LoggedHeader />

      <main style={containerStyle}>
        <section style={cardStyle}>
          <h1 style={{ margin: 0, color: '#123134' }}>Gestao da Empresa</h1>
          {!loading && company && (
            <p style={{ margin: '8px 0 0', color: '#3f5f60' }}>
              {company.name} - CNPJ: {company.cnpj}
            </p>
          )}
        </section>

        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>Administradores</h2>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px', gap: '10px' }}>
              <div style={{ display: 'grid', gap: '6px' }}>
                <label style={{ fontWeight: 600, fontSize: '13px', color: '#123134' }}>E-mail para associar admin existente:</label>
                <input
                  value={associateEmail}
                  onChange={(event) => setAssociateEmail(event.target.value)}
                  placeholder="usuario@empresa.com"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    border: '1px solid rgba(15, 46, 47, 0.2)',
                    padding: '10px 12px',
                  }}
                />
              </div>
              <div style={{ alignSelf: 'end' }}>
                <Button variant="primary" onClick={associateExistingAdmin} disabled={saving} full>
                  Associar
                </Button>
              </div>
            </div>

            <form onSubmit={adminForm.handleSubmit(createAdmin)} style={{ display: 'grid', gap: '12px' }}>
              <h3 style={{ margin: 0, color: '#315050' }}>Criar novo administrador</h3>
              <Input label="Nome:" placeholder="Nome completo" type="text" register={adminForm.register('name')} />
              <Input label="E-mail:" placeholder="usuario@empresa.com" type="text" register={adminForm.register('email')} />
              <PhoneInput label="Telefone:" placeholder="(11) 99999-9999" control={adminForm.control} name="phone" />
              <CpfInput label="CPF:" placeholder="000.000.000-00" control={adminForm.control} name="cpf" />
              <Input label="Senha:" placeholder="Senha" type="password" register={adminForm.register('password')} />
              <Button variant="primary" type="submit" disabled={saving}>
                Criar e associar admin
              </Button>
            </form>

            <div>
              {loading && <p>Carregando administradores...</p>}
              {!loading && admins.length === 0 && <p>Nenhum administrador associado.</p>}
              {!loading &&
                admins.map((admin) => (
                  <div key={admin.id} style={itemRowStyle}>
                    <div>
                      <strong>{admin.name}</strong> ({admin.email})
                      {admin.isPrimary && <span style={{ ...badgeStyle, marginLeft: '8px' }}>Principal</span>}
                    </div>
                    <div style={{ color: '#456668', fontSize: '14px' }}>
                      CPF: {admin.cpf || '-'} | Telefone: {admin.phone || '-'}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <Button
                        variant="transparent"
                        disabled={saving || admin.isPrimary}
                        onClick={() => setPrimary(admin.id)}
                      >
                        Tornar principal
                      </Button>
                      <Button variant="secondary" disabled={saving} onClick={() => removeAdmin(admin.id)}>
                        Remover
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>Funcionarios</h2>

          <form onSubmit={employeeForm.handleSubmit(createEmployee)} style={{ display: 'grid', gap: '12px' }}>
            <h3 style={{ margin: 0, color: '#315050' }}>Criar novo funcionario</h3>
            <Input label="Nome:" placeholder="Nome completo" type="text" register={employeeForm.register('name')} />
            <Input label="E-mail:" placeholder="funcionario@empresa.com" type="text" register={employeeForm.register('email')} />
            <PhoneInput label="Telefone:" placeholder="(11) 99999-9999" control={employeeForm.control} name="phone" />
            <CpfInput label="CPF:" placeholder="000.000.000-00" control={employeeForm.control} name="cpf" />
            <Input label="Senha:" placeholder="Senha" type="password" register={employeeForm.register('password')} />
            <Button variant="primary" type="submit" disabled={saving}>
              Criar funcionario
            </Button>
          </form>

          <div style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
            {loading && <p>Carregando funcionarios...</p>}
            {!loading && employees.length === 0 && <p>Nenhum funcionario associado.</p>}
            {!loading &&
              employees.map((employee) => (
                <div key={employee.id} style={itemRowStyle}>
                  <div>
                    <strong>{employee.name}</strong> ({employee.email})
                  </div>
                  <div style={{ color: '#456668', fontSize: '14px' }}>
                    CPF: {employee.cpf || '-'} | Telefone: {employee.phone || '-'}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button variant="secondary" disabled={saving} onClick={() => removeEmployee(employee.id)}>
                      Remover da empresa
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminsPage;

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import LoggedHeader from "../../../../components/LoggedHeader";
import CpfInput from "../../../../components/CpfInput";
import Input from "../../../../components/Input";
import PhoneInput from "../../../../components/PhoneInput";
import Button from "../../../../components/Button";
import { useSnack } from "../../../../contexts/SnackContext";
import { companyAdminService } from "../../../../services/companyAdminService";

const CompanyAdminsPage = () => {
  const { showSnack } = useSnack();

  const [company, setCompany] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [associateEmail, setAssociateEmail] = useState("");
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const adminForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
      password: "",
      jobTitle: "",
    },
  });

  const employeeCreateForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
      password: "",
      jobTitle: "",
    },
  });

  const employeeEditForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
    },
  });

  const loadAllData = useCallback(
    async ({ keepEditingEmployee = false } = {}) => {
      try {
        setLoading(true);

        const [adminsResponse, employeesResponse] = await Promise.all([
          companyAdminService.list(),
          companyAdminService.listEmployees(),
        ]);

        const companyData =
          adminsResponse.company || employeesResponse.company || null;

        setCompany(companyData);
        setAdmins(adminsResponse.admins || []);
        setEmployees(employeesResponse.employees || []);

        if (!keepEditingEmployee) {
          setEditingEmployeeId(null);
        }
      } catch (error) {
        showSnack({
          variant: "error",
          message:
            error?.response?.data?.message ||
            "Não foi possível carregar os dados da empresa.",
        });
      } finally {
        setLoading(false);
      }
    },
    [showSnack],
  );

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  const createAdmin = async (formData) => {
    try {
      setSaving(true);
      await companyAdminService.add(formData);
      adminForm.reset();
      await loadAllData();
      showSnack({
        variant: "success",
        message: "Administrador associado com sucesso.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message || "Erro ao criar administrador.",
      });
    } finally {
      setSaving(false);
    }
  };

  const associateExistingAdmin = async () => {
    if (!associateEmail.trim()) {
      showSnack({
        variant: "warning",
        message: "Informe o e-mail para associar.",
      });
      return;
    }

    try {
      setSaving(true);
      await companyAdminService.add({ email: associateEmail.trim() });
      setAssociateEmail("");
      await loadAllData();
      showSnack({
        variant: "success",
        message: "Administrador associado com sucesso.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message || "Erro ao associar administrador.",
      });
    } finally {
      setSaving(false);
    }
  };

  const setPrimary = async (adminUserId) => {
    try {
      setSaving(true);
      await companyAdminService.setPrimary(adminUserId);
      await loadAllData();
      showSnack({
        variant: "success",
        message: "Administrador principal atualizado.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message ||
          "Erro ao trocar administrador principal.",
      });
    } finally {
      setSaving(false);
    }
  };

  const removeAdmin = async (adminUserId) => {
    try {
      setSaving(true);
      await companyAdminService.remove(adminUserId);
      await loadAllData();
      showSnack({ variant: "success", message: "Administrador removido." });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message || "Erro ao remover administrador.",
      });
    } finally {
      setSaving(false);
    }
  };

  const createEmployee = async (formData) => {
    try {
      setSaving(true);
      await companyAdminService.addEmployee(formData);
      employeeCreateForm.reset();
      await loadAllData();
      showSnack({
        variant: "success",
        message: "Funcionário criado com sucesso.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message: error?.response?.data?.message || "Erro ao criar funcionário.",
      });
    } finally {
      setSaving(false);
    }
  };

  const startEditEmployee = (employee) => {
    setEditingEmployeeId(employee.id);
    employeeEditForm.reset({
      name: employee.name || "",
      email: employee.email || "",
      phone: employee.phone || "",
      jobTitle: employee.jobTitle || "",
    });
  };

  const cancelEditEmployee = () => {
    setEditingEmployeeId(null);
    employeeEditForm.reset({
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
    });
  };

  const saveEmployeeEdition = async (formData) => {
    if (!editingEmployeeId) return;

    try {
      setSaving(true);
      const response = await companyAdminService.updateEmployee(
        editingEmployeeId,
        formData,
      );
      setEmployees(response.employees || []);
      setEditingEmployeeId(null);
      showSnack({
        variant: "success",
        message: "Funcionário atualizado com sucesso.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message || "Erro ao atualizar funcionário.",
      });
    } finally {
      setSaving(false);
    }
  };

  const removeEmployee = async (employeeUserId) => {
    try {
      setSaving(true);
      await companyAdminService.removeEmployee(employeeUserId);
      await loadAllData();
      if (editingEmployeeId === employeeUserId) {
        cancelEditEmployee();
      }
      showSnack({
        variant: "success",
        message: "Funcionário removido da empresa.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message || "Erro ao remover funcionário.",
      });
    } finally {
      setSaving(false);
    }
  };

  const editingEmployee = employees.find((employee) => employee.id === editingEmployeeId) || null;

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.Card>
          <S.CardTitle>Administradores e Funcionários</S.CardTitle>
          {!loading && company && (
            <S.CardText>
              {company.name} - CNPJ: {company.cnpj}
            </S.CardText>
          )}
        </S.Card>

        <S.Card>
          <S.SectionTitle>Administradores</S.SectionTitle>

          <S.SectionGrid>
            <S.SectionContent>
              <S.SectionAssociateAdmin>
                <S.Label>E-mail para associar admin existente:</S.Label>
                <S.AssociateEmailInput
                  value={associateEmail}
                  onChange={(event) => setAssociateEmail(event.target.value)}
                  placeholder="usuario@empresa.com"
                />
              </S.SectionAssociateAdmin>
              <S.SectionButtons>
                <Button
                  variant="primary"
                  type="button"
                  onClick={associateExistingAdmin}
                  disabled={saving}
                  full
                >
                  Associar
                </Button>
              </S.SectionButtons>
            </S.SectionContent>

            <S.Form onSubmit={adminForm.handleSubmit(createAdmin)}>
              <S.FormTitle>Criar novo administrador</S.FormTitle>
              <Input
                label="Nome:"
                placeholder="Nome completo"
                type="text"
                register={adminForm.register("name")}
              />
              <Input
                label="E-mail:"
                placeholder="usuario@empresa.com"
                type="text"
                register={adminForm.register("email")}
              />
              <PhoneInput
                label="Telefone:"
                placeholder="(11) 99999-9999"
                control={adminForm.control}
                name="phone"
              />
              <CpfInput
                label="CPF:"
                placeholder="000.000.000-00"
                control={adminForm.control}
                name="cpf"
              />
              <Input
                label="Cargo:"
                placeholder="Ex: Coordenador de Suporte"
                type="text"
                register={adminForm.register("jobTitle")}
              />
              <Input
                label="Senha:"
                placeholder="Senha"
                type="password"
                register={adminForm.register("password")}
              />
              <Button variant="primary" type="submit" disabled={saving}>
                Criar e associar admin
              </Button>
            </S.Form>

            <S.AdminsGroup>
              {loading && <p>Carregando administradores...</p>}
              {!loading && admins.length === 0 && (
                <p>Nenhum administrador associado.</p>
              )}
              {!loading &&
                admins.map((admin) => (
                  <S.ItemRow key={admin.id}>
                    <div>
                      <strong>{admin.name}</strong> ({admin.email})
                      {admin.isPrimary && <S.Badge>Principal</S.Badge>}
                    </div>
                    <S.InfoRow>
                      CPF: {admin.cpf || "-"} | Telefone: {admin.phone || "-"} |
                      Cargo: {admin.jobTitle || "-"}
                    </S.InfoRow>
                    <S.RowActions>
                      <Button
                        variant="transparent"
                        type="button"
                        disabled={saving || admin.isPrimary}
                        onClick={() => setPrimary(admin.id)}
                      >
                        Tornar principal
                      </Button>
                      <Button
                        variant="secondary"
                        type="button"
                        disabled={saving}
                        onClick={() => removeAdmin(admin.id)}
                      >
                        Remover
                      </Button>
                    </S.RowActions>
                  </S.ItemRow>
                ))}
            </S.AdminsGroup>
          </S.SectionGrid>
        </S.Card>

        <S.Card>
          <S.SectionTitle>Funcionários</S.SectionTitle>

          <S.Form onSubmit={employeeCreateForm.handleSubmit(createEmployee)}>
            <S.FormTitle>Criar novo funcionário</S.FormTitle>
            <Input
              label="Nome:"
              placeholder="Nome completo"
              type="text"
              register={employeeCreateForm.register("name")}
            />
            <Input
              label="E-mail:"
              placeholder="funcionario@empresa.com"
              type="text"
              register={employeeCreateForm.register("email")}
            />
            <PhoneInput
              label="Telefone:"
              placeholder="(11) 99999-9999"
              control={employeeCreateForm.control}
              name="phone"
            />
            <CpfInput
              label="CPF:"
              placeholder="000.000.000-00"
              control={employeeCreateForm.control}
              name="cpf"
            />
            <Input
              label="Cargo:"
              placeholder="Ex: Analista de Atendimento"
              type="text"
              register={employeeCreateForm.register("jobTitle")}
            />
            <Input
              label="Senha:"
              placeholder="Senha"
              type="password"
              register={employeeCreateForm.register("password")}
            />
            <Button variant="primary" type="submit" disabled={saving}>
              Criar funcionário
            </Button>
          </S.Form>

          <S.InfosContainer>
            {loading && <p>Carregando funcionários...</p>}
            {!loading && employees.length === 0 && (
              <p>Nenhum funcionário associado.</p>
            )}
            {!loading &&
              employees.map((employee) => (
                <S.ItemRow key={employee.id}>
                  <div>
                    <strong>{employee.name}</strong> ({employee.email})
                  </div>
                  <S.InfoRow>
                    CPF: {employee.cpf || "-"} | Telefone:{" "}
                    {employee.phone || "-"} | Cargo: {employee.jobTitle || "-"}
                  </S.InfoRow>
                  <S.RowActions>
                    <Button
                      variant="transparent"
                      type="button"
                      disabled={saving}
                      onClick={() => startEditEmployee(employee)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="secondary"
                      type="button"
                      disabled={saving}
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Remover da empresa
                    </Button>
                  </S.RowActions>
                </S.ItemRow>
              ))}
          </S.InfosContainer>

          {editingEmployee && (
            <S.Form
              onSubmit={employeeEditForm.handleSubmit(saveEmployeeEdition)}
              style={{ marginTop: "18px", display: "grid", gap: "10px" }}
            >
              <S.FormTitle>
                Editar funcionário
              </S.FormTitle>
              <Input
                label="Nome:"
                placeholder="Nome completo"
                type="text"
                register={employeeEditForm.register("name")}
              />
              <Input
                label="E-mail:"
                placeholder="funcionario@empresa.com"
                type="text"
                register={employeeEditForm.register("email")}
              />
              <PhoneInput
                label="Telefone:"
                placeholder="(11) 99999-9999"
                control={employeeEditForm.control}
                name="phone"
              />
              <Input
                label="Cargo:"
                placeholder="Ex: Analista de Atendimento"
                type="text"
                register={employeeEditForm.register("jobTitle")}
              />
              <S.ReadOnlyInfo>
                <strong>CPF bloqueado:</strong> {editingEmployee.cpf || "-"}
              </S.ReadOnlyInfo>
              <S.RowActions>
                <Button variant="primary" type="submit" disabled={saving}>
                  Salvar funcionário
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  disabled={saving}
                  onClick={cancelEditEmployee}
                >
                  Cancelar
                </Button>
              </S.RowActions>
            </S.Form>
          )}
        </S.Card>
      </S.Container>
    </S.Page>
  );
};

export default CompanyAdminsPage;

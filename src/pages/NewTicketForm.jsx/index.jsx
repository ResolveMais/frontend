import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import LoggedHeader from '../../components/LoggedHeader';
import styles from './styles';

const NewTicketForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyId: '',
        complaintTitleId: '',
        description: ''
    });
    const [companies, setCompanies] = useState([]);
    const [complaintTitles, setComplaintTitles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert('Você precisa fazer login para criar um ticket');
            navigate('/login');
            return;
        }
        
        fetchCompanies();
    }, [navigate]);

    const fetchCompanies = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            return;
        }

        try {
            setLoading(true);
            
            const url = `${API_BASE}/tickets/companies`;
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const responseText = await response.text();

            try {
                const data = JSON.parse(responseText);
                
                if (data.companies) {
                    setCompanies(data.companies);
                } else if (data.result) {
                    setCompanies(data.result);
                } else if (Array.isArray(data)) {
                    setCompanies(data);
                } else {
                    setCompanies([]);
                }
            } catch (jsonError) {
                if (responseText.includes('<!doctype html>')) {
                    alert('Erro: O servidor está retornando HTML em vez de JSON. Verifique a URL da API.');
                } else {
                    alert('Erro: Resposta inválida do servidor');
                }
            }

        } catch (error) {
            alert('Erro de conexão com o servidor: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchComplaintTitles = async (companyId) => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert('Sessão expirada. Faça login novamente.');
            navigate('/login');
            return;
        }

        try {
            const url = `${API_BASE}/tickets/complaint-titles/${companyId}`;
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const responseText = await response.text();

            try {
                const data = JSON.parse(responseText);
                
                if (data.complaintTitles) {
                    setComplaintTitles(data.complaintTitles);
                } else if (Array.isArray(data)) {
                    setComplaintTitles(data);
                } else {
                    setComplaintTitles([]);
                }
            } catch (jsonError) {
                alert('Erro ao carregar assuntos');
            }

        } catch (error) {
            alert('Erro ao carregar assuntos');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.description.trim()) {
            alert('Por favor, preencha a descrição do ticket');
            return;
        }

        if (formData.description.length < 20) {
            alert('A descrição deve ter pelo menos 20 caracteres');
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const url = `${API_BASE}/tickets/create`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseText = await response.text();

            try {
                const data = JSON.parse(responseText);
                
                if (response.ok) {
                    setShowSuccess(true);
                    setTimeout(() => {
                        navigate('/cliente/home');
                    }, 2000);
                } else {
                    alert(data.message || `Erro ${response.status} ao criar ticket`);
                }
            } catch (jsonError) {
                alert('Erro inesperado ao criar ticket.');
            }

        } catch (error) {
            alert('Erro de conexão ao criar ticket: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCompanySelect = (company) => {
        setFormData({ ...formData, companyId: company.id });
        setSelectedCompany(company);
        fetchComplaintTitles(company.id);
        setStep(2);
        setSearchTerm('');
    };

    const handleComplaintTitleSelect = (complaintTitle) => {
        setFormData({ ...formData, complaintTitleId: complaintTitle.id });
        setStep(3);
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!localStorage.getItem('token')) {
        return (
            <div style={styles.page}>
                <div style={styles.loadingContainer}>
                    <p>Verificando autenticação...</p>
                    <Button 
                        variant="primary" 
                        onClick={() => navigate('/login')}
                    >
                        Fazer Login
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.page}>
            {/* Header */}
            <div style={styles.headerFixed}>
                <LoggedHeader />
            </div>

            {/* Pop-up de Sucesso - SÓ APARECE QUANDO showSuccess for true */}
            {showSuccess && (
                <div style={styles.successPopup}>
                    <div style={styles.successContent}>
                        <div style={styles.successIcon}>✓</div>
                        <h3 style={styles.successTitle}>Ticket Aberto!</h3>
                        <p style={styles.successMessage}>Seu ticket foi criado com sucesso e será atendido em breve.</p>
                    </div>
                </div>
            )}

            {/* Progress Steps */}
            <div style={styles.progressSteps}>
                <div style={{...styles.step, ...(step >= 1 ? styles.stepActive : {})}}>
                    <div style={{...styles.stepNumber, ...(step >= 1 ? styles.stepNumberActive : {})}}>1</div>
                    <span style={styles.stepText}>Empresa</span>
                </div>
                <div style={{...styles.step, ...(step >= 2 ? styles.stepActive : {})}}>
                    <div style={{...styles.stepNumber, ...(step >= 2 ? styles.stepNumberActive : {})}}>2</div>
                    <span style={styles.stepText}>Assunto</span>
                </div>
                <div style={{...styles.step, ...(step >= 3 ? styles.stepActive : {})}}>
                    <div style={{...styles.stepNumber, ...(step >= 3 ? styles.stepNumberActive : {})}}>3</div>
                    <span style={styles.stepText}>Descrição</span>
                </div>
            </div>

            {/* Form Content */}
            <div style={styles.content}>
                
                {/* Step 1: Selecionar Empresa */}
                {step === 1 && (
                    <div style={styles.formStep}>
                        <div style={styles.stepHeader}>
                            <h2 style={styles.stepTitle}>Para qual empresa deseja abrir o Ticket?</h2>
                            <p style={styles.stepDescription}>Selecione a empresa que deseja contactar</p>
                        </div>
                        
                        {loading && (
                            <div style={styles.loadingMessage}>
                                <p>Carregando empresas...</p>
                            </div>
                        )}
                        
                        {!loading && (
                            <>
                                <div style={styles.searchContainer}>
                                    <input
                                        type="text"
                                        placeholder="Buscar empresa pelo nome..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={styles.searchInput}
                                    />
                                </div>
                                
                                <div style={styles.optionsList}>
                                    {filteredCompanies.map(company => (
                                        <div
                                            key={company.id}
                                            style={styles.optionItem}
                                            onClick={() => handleCompanySelect(company)}
                                        >
                                            <div style={styles.optionContent}>
                                                <h3 style={styles.optionTitle}>{company.name}</h3>
                                                {company.cnpj && (
                                                    <span style={styles.companyCnpj}>CNPJ: {company.cnpj}</span>
                                                )}
                                                {company.description && (
                                                    <p style={styles.companyDescription}>{company.description}</p>
                                                )}
                                            </div>
                                            <div style={styles.optionArrow}>→</div>
                                        </div>
                                    ))}
                                    {filteredCompanies.length === 0 && companies.length > 0 && (
                                        <div style={styles.noResults}>
                                            <p style={styles.noResultsText}>Nenhuma empresa encontrada para "{searchTerm}"</p>
                                        </div>
                                    )}
                                    {companies.length === 0 && !loading && (
                                        <div style={styles.noResults}>
                                            <p style={styles.noResultsText}>Nenhuma empresa cadastrada no sistema</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Step 2: Selecionar Assunto */}
                {step === 2 && (
                    <div style={styles.formStep}>
                        <div style={styles.stepHeader}>
                            <h2 style={styles.stepTitle}>Qual o assunto?</h2>
                            <p style={styles.stepDescription}>
                                Selecione o assunto do seu ticket para {selectedCompany?.name}
                            </p>
                        </div>
                        
                        <div style={styles.optionsList}>
                            {complaintTitles.map(title => (
                                <div
                                    key={title.id}
                                    style={styles.optionItem}
                                    onClick={() => handleComplaintTitleSelect(title)}
                                >
                                    <div style={styles.optionContent}>
                                        <h3 style={styles.optionTitle}>{title.title}</h3>
                                        {title.description && (
                                            <p style={styles.complaintDescription}>{title.description}</p>
                                        )}
                                    </div>
                                    <div style={styles.optionArrow}>→</div>
                                </div>
                            ))}
                            {complaintTitles.length === 0 && (
                                <div style={styles.noResults}>
                                    <p style={styles.noResultsText}>Nenhum assunto disponível</p>
                                </div>
                            )}
                        </div>

                        <div style={styles.stepBackContainer}>
                            <Button 
                                variant="transparent"
                                onClick={() => setStep(1)}
                                style={styles.stepBackButton}
                            >
                                ← Voltar para empresas
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 3: Descrição */}
                {step === 3 && (
                    <form onSubmit={handleSubmit} style={styles.formStep}>
                        <div style={styles.stepHeader}>
                            <h2 style={styles.stepTitle}>Descreva em detalhes</h2>
                            <p style={styles.stepDescription}>
                                Forneça todas as informações necessárias sobre sua solicitação
                            </p>
                        </div>

                        <div style={styles.selectedInfo}>
                            <div style={styles.infoItem}>
                                <strong>Empresa:</strong> {selectedCompany?.name}
                            </div>
                            <div style={styles.infoItem}>
                                <strong>Assunto:</strong> {complaintTitles.find(t => t.id === formData.complaintTitleId)?.title}
                            </div>
                        </div>
                        
                        <div style={styles.formGroup}>
                            <label htmlFor="description" style={styles.formLabel}>
                                Descrição detalhada *
                            </label>
                            <textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Descreva sua solicitação com detalhes..."
                                rows={10}
                                required
                                style={styles.textarea}
                            />
                            <div style={styles.textareaFooter}>
                                <small style={styles.charCount}>
                                    {formData.description.length} caracteres
                                </small>
                                <small style={formData.description.length < 20 ? styles.charHintError : styles.charHint}>
                                    Mínimo: 20 caracteres
                                </small>
                            </div>
                        </div>
                        
                        <div style={styles.formActions}>
                            <Button 
                                variant="secondary"
                                onClick={() => setStep(2)}
                                type="button"
                            >
                                Voltar
                            </Button>
                            <Button 
                                type="submit"
                                variant={formData.description.length < 20 ? "disabled" : "primary"}
                                disabled={loading || formData.description.length < 20}
                                full
                            >
                                {loading ? 'Criando Ticket...' : 'Criar Ticket'}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default NewTicketForm;

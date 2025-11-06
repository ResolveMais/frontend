const styles = {
    // Page Container
    page: {
        minHeight: '100vh',
        background: '#f8f9fa',
        padding: 0,
        position: 'relative'
    },

    // ✅ CORREÇÃO: Header fixo com espaçamento
    headerFixed: {
        background: 'white',
        borderBottom: '1px solid #e9ecef',
        padding: '0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
    },

    backButton: {
        minWidth: 'auto',
        padding: '0.75rem 1rem'
    },
    headerContent: {
        flex: 1
    },
    title: {
        margin: 0,
        color: '#333',
        fontSize: '1.5rem',
        fontWeight: '600'
    },
    subtitle: {
        margin: '0.25rem 0 0 0',
        color: '#6c757d',
        fontSize: '0.9rem'
    },

    // Progress Steps
    progressSteps: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 2rem',
        background: 'white',
        borderBottom: '1px solid #e9ecef',
        marginTop: '70px'
    },
    step: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0 2rem',
        position: 'relative',
        color: '#6c757d'
    },
    stepActive: {
        color: '#00C853'
    },
    stepNumber: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        background: '#dee2e6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
        fontWeight: '600',
        color: '#6c757d'
    },
    stepNumberActive: {
        background: '#00C853',
        color: 'white'
    },
    stepText: {
        fontSize: '0.8rem',
        fontWeight: '500'
    },

    // ✅ CORREÇÃO: Content com margin-top para não ficar atrás do header
    content: {
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '0 2rem'
    },
    formStep: {
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1
    },

    // Step Header
    stepHeader: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    stepTitle: {
        margin: '0 0 0.5rem 0',
        color: '#333',
        fontSize: '1.5rem',
        fontWeight: '600'
    },
    stepDescription: {
        margin: 0,
        color: '#6c757d',
        fontSize: '0.95rem'
    },

    // Loading
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        gap: '1rem'
    },
    loadingMessage: {
        textAlign: 'center',
        padding: '2rem',
        color: '#666'
    },

    // Search
    searchContainer: {
        marginBottom: '1.5rem'
    },
    searchInput: {
        width: '100%',
        padding: '1rem',
        border: '2px solid #e9ecef',
        borderRadius: '8px',
        fontSize: '1rem',
        transition: 'border-color 0.2s ease',
        outline: 'none'
    },

    // Options List
    optionsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxHeight: '500px',
        overflowY: 'auto'
    },
    optionItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem',
        border: '2px solid #e9ecef',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        background: 'white'
    },
    optionContent: {
        flex: 1
    },
    optionTitle: {
        margin: '0 0 0.5rem 0',
        color: '#333',
        fontSize: '1.1rem',
        fontWeight: '600'
    },
    companyCnpj: {
        fontSize: '0.8rem',
        color: '#6c757d',
        background: '#f8f9fa',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        display: 'inline-block',
        marginBottom: '0.5rem'
    },
    companyDescription: {
        margin: 0,
        color: '#6c757d',
        fontSize: '0.9rem',
        lineHeight: '1.4'
    },
    complaintDescription: {
        margin: 0,
        color: '#6c757d',
        fontSize: '0.9rem',
        lineHeight: '1.4'
    },
    optionArrow: {
        color: '#00C853',
        fontSize: '1.2rem',
        fontWeight: '300'
    },

    // No Results
    noResults: {
        textAlign: 'center',
        padding: '3rem 2rem',
        color: '#6c757d'
    },
    noResultsText: {
        margin: '0 0 0.5rem 0',
        fontSize: '1rem'
    },
    noResultsHint: {
        fontSize: '0.85rem'
    },

    // ✅ Container para o botão de voltar no step 2
    stepBackContainer: {
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #e9ecef'
    },
    stepBackButton: {
        minWidth: 'auto',
        marginTop: '0'
    },

    // Selected Info
    selectedInfo: {
        background: '#f8f9fa',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        borderLeft: '4px solid #00C853'
    },
    infoItem: {
        marginBottom: '0.5rem'
    },

    // Form Group
    formGroup: {
        marginBottom: '2rem'
    },
    formLabel: {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#333',
        fontWeight: '500'
    },

    // ✅ CORREÇÃO CRÍTICA: Textarea funcionando
    textarea: {
        width: '100%',
        padding: '1rem',
        border: '2px solid #e9ecef',
        borderRadius: '8px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        resize: 'vertical',
        lineHeight: '1.5',
        transition: 'border-color 0.2s ease',
        outline: 'none',
        position: 'relative',
        zIndex: 2
    },
    textareaFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.5rem'
    },
    charCount: {
        color: '#6c757d'
    },
    charHint: {
        color: '#6c757d'
    },
    charHintError: {
        color: '#dc3545'
    },

    // Form Actions
    formActions: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'flex-end',
        marginTop: '2rem'
    },

    // ✅ Pop-up de sucesso
    successPopup: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    successContent: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        maxWidth: '400px',
        width: '90%'
    },
    successIcon: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#00C853',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '0 auto 1rem'
    },
    successTitle: {
        margin: '0 0 0.5rem 0',
        color: '#00C853',
        fontSize: '1.5rem',
        fontWeight: '600'
    },
    successMessage: {
        margin: 0,
        color: '#666',
        fontSize: '1rem',
        lineHeight: '1.5'
    }
};

export default styles;
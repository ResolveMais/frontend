import React, { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as S from './styles'

import LoggedHeader from '../../components/LoggedHeader'
import Input from '../../components/Input' // ajuste para o nome correto
import Button from '../../components/Button'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'react'
import { api } from '../../services/api'
import { useSnack } from '../../contexts/SnackContext'

// Schema de validação
const schema = yup.object().shape({
    name: yup.string().required('Nome completo é obrigatório'),
    cpf: yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'O CPF deve estar no formato XXX.XXX.XXX-XX')
        .required('CPF é obrigatório'),
    phone: yup.string()
        // .matches(/^\d{10,11}$/, 'Telefone inválido (10 ou 11 dígitos, somente números)')
        .required('Telefone é obrigatório'),
    email: yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
})

const UserData = () => {
    const { showSnack } = useSnack()
    const { userData, validateToken } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    })

    // Data formatada (memoizada para não recalcular toda renderização)
    const formattedDate = useMemo(() => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const dateStr = new Date().toLocaleDateString('pt-BR', options)
        return dateStr.charAt(0).toUpperCase() + dateStr.slice(1)
    }, [])

    const onSubmit = async (data) => {
        if (!userData) return

        try {
            const payload = {
                name: data.name || userData.name,
                cpf: data.cpf || userData.cpf,
                email: data.email || userData.email,
                phone: data.phone || userData.phone,
            }

            const response = await api.patch('/users/update-profile', payload)

            if (response.status === 200) {
                validateToken(localStorage.getItem('token'));
                showSnack({ variant: 'success', message: 'Dados atualizados com sucesso!' });
            } else {
                showSnack({ variant: 'error', message: 'Erro ao atualizar perfil. Tente novamente.' });
            }
        } catch (error) {
            showSnack({ variant: 'error', message: 'Erro ao atualizar perfil. Tente novamente.' });
        }
    }

    useEffect(() => {
        if (!userData) return;

        setValue('name', userData?.name || '')
        setValue('cpf', userData?.cpf || '')
        setValue('email', userData?.email || '')
        setValue('phone', userData?.phone || '')
    }, [userData])

    return (
        <S.Container>
            <LoggedHeader />

            <S.MainContainer>
                <S.Header>
                    <S.HeaderDate>{formattedDate}</S.HeaderDate>
                    <S.HeaderTitle>Configurações do Usuário</S.HeaderTitle>
                </S.Header>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Nome Completo"
                        placeholder="Digite seu nome"
                        register={register('name')}
                        errors={errors?.name}
                    />

                    <Input
                        label="CPF"
                        placeholder="Somente números"
                        register={register('cpf')}
                        errors={errors?.cpf}
                    />

                    <Input
                        label="Email"
                        placeholder="email@exemplo.com"
                        register={register('email')}
                        errors={errors?.email}
                    />

                    <Input
                        label="Telefone"
                        placeholder="Somente números"
                        register={register('phone')}
                        errors={errors?.phone}
                    />

                    <Button type="submit">
                        Salvar Alterações
                    </Button>

                </S.Form>
            </S.MainContainer>
        </S.Container>
    )
}

export default UserData

import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { injectIntl } from 'react-intl'
import {RegisterProps, RegisterState} from "./Register.I";
import {AuthService} from "../../services/AuthService/AuthService";
import {ChangeEvent, useEffect, useState} from "react";
import {User, UserSubscriptionType} from "../../models/User";

const RegisterComponent: React.FC<RegisterProps> = (props: RegisterProps) => {
    const title = props.intl.messages.pages.signup.title;
    const [user, setUser] = useState<RegisterState>({
        email: '',
        password: '',
        confirm_password: ''
    });
    const [isUserValid, setUserValid] = useState(false);

    const registerUser = () => {
        if (isUserValid) {
            delete user.confirm_password;

            let formattedUser = {
                email: user.email,
                password: user.password,
                subscription_type: UserSubscriptionType.BASIC
            };

            AuthService.register(formattedUser).then((response) => {
                console.log(response)

            }).catch(() =>  {
                console.log('catch')
            });
        }
    };

    // Validation effect
    useEffect(() => {
        const userKeys = Object.keys(user);

        for (let i = 0; i < userKeys.length; i++) {
            const key = userKeys[i];
            const value = (user as any)[key];
            if (!value || value.length === 0 ||
                key === 'password' && value !== user.confirm_password) {
                setUserValid(false);

                break;
            }

            setUserValid(true);
        }

    }, [user]);

    const updateForm = (e: ChangeEvent) => {
        e.preventDefault();

        if (!e.target) return;
        const inputName = (e.target as HTMLInputElement).name;

        setUser({
            ...user,
            [inputName]: (e.target as HTMLInputElement).value
        })
    };

    return (
        <div className="cover-page-layout">
            <Header isTransparent={false} />
            <div className="page page__center-vertical">
                <form className={"centered-block centered-block__med centered-block__with-background"}>
                    <h2 className={"centered-block__title"}>{title}</h2>
                    <input name="email" onChange={updateForm} value={user.email} type={"text"} placeholder={props.intl.messages.placeholders.contact.email}/>
                    <input name="password" onChange={updateForm} type={"password"} value={user.password} placeholder={props.intl.messages.placeholders.contact.password}/>
                    <input name="confirm_password" onChange={updateForm} type={"password"} value={user.confirm_password} placeholder={props.intl.messages.placeholders.contact.confirm_password}/>
                    <button type="button" className={"button"} onClick={registerUser}>{props.intl.messages.forms.submit}</button>
                </form>
            </div>
        </div>
    );
};

export const Register = injectIntl(RegisterComponent);

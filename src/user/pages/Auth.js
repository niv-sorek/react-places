import React, { useState, useContext } from 'react';

import './Auth.css';

import Card from '../../shared/components/UIElements/Card/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: { value: '', isValid: false },
            password: { value: '', isvalid: false },
        },
        false
    );
    const authSubmitHandler = async (event) => {
        event.preventDefault();

        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/login',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );

                auth.login(responseData.user.id);
            } catch (error) {}
        } else {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/signup',
                    'POST',
                    JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );

                auth.login(responseData.user.id);
            } catch (error) {}
        }
    };
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                { ...formState.inputs, name: undefined },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        } else {
            setFormData(
                { ...formState.inputs, name: { value: '', isValid: false } },
                false
            );
        }

        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <React.Fragment>
            {error && (
                <div className='center'>
                    <ErrorModal error={error} onClear={clearError} />
                </div>
            )}
            <Card className='authentication'>
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>Login required</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    {!isLoginMode && (
                        <Input
                            element='input'
                            id='name'
                            type='name'
                            label='Name'
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText='please Enter a name.'
                            onInput={inputHandler}
                        />
                    )}
                    <Input
                        element='input'
                        id='email'
                        type='emal'
                        label='E-mail'
                        validators={[VALIDATOR_EMAIL()]}
                        errorText='Please enter a valid E-mail.'
                        onInput={inputHandler}
                    />
                    <Input
                        element='input'
                        id='password'
                        type='password'
                        label='Password'
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText='Please enter a valid Password(at least 6 characters).'
                        onInput={inputHandler}
                    />
                    <Button type='submit' disabled={!formState.isValid}>
                        {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                    </Button>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    SWITCH TO {!isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </Card>
        </React.Fragment>
    );
};

export default Auth;

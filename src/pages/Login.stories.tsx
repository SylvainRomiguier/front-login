import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { Login } from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args}/>;

export const LoginTemplate = Template.bind({});
LoginTemplate.args = {
  submit: (email:string, password: string) => new Promise(() => action("clic submit"))
}
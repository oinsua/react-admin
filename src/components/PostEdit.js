import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';
import {PostTitle} from './PostTitle';

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
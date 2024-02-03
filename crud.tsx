import React, { useEffect, useState } from 'react';
import { Button, View, Text, FlatList } from 'react-native';


export const addData = async (data: any) => {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
    } catch (error) {
    console.error(error);
    }
};

export const updateData = async (id: any, data: any) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { // Notez l'utilisation des guillemets inversés ici
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.headers.get('content-type')?.includes('application/json')) {
            const result = await response.json();
            console.log(result);
            return result;
        } else {
            const text = await response.text();
            console.error('Réponse non-JSON reçue:', text);
        }
    } catch (error) {
        console.error(error);
    }
};


export const deleteData = async (id: any) => {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log("Utilisateur supprimé");
    }
    } catch (error) {
    console.error(error);
    }
};

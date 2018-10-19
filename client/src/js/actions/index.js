// src/js/actions/index.js
import { ADD_GREETING, REMOVE_GREETING, FRENCHIFY } from "../constants/action-types";

export const addGreeting = newName => ({
    type: ADD_GREETING, payload:
    {
        name: newName,
        message: 'Hello'
    }
});

export const removeGreeting = greeting => ({
    type: REMOVE_GREETING, payload:
        greeting
});

export const frenchify = name => ({
    type: FRENCHIFY, payload:
        name
});
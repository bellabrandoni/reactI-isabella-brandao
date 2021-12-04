import {render, screen, fireEvent } from '@testing-library/react';
import { List } from './List';

describe('List.jsx', () => {
    it('should be able to add a task', () => {
       render(<List />)
       const inputElement = screen.getByPlaceholderText("Adicionar nova tarefa")
       const buttonElement = screen.getByTestId('add-task')

       fireEvent.change(inputElement, {
           target: {
               value: 'Estudar'
           }
       })
       fireEvent.click(buttonElement)
       const addedFirstTaskTitle = screen.getByText('Estudar')
       expect(addedFirstTaskTitle).toHaveTextContent('Estudar')
    })

    it('should not be able to add an empty task', () => {
        render(<List />)
        const buttonElement = screen.getByTestId('add-task')

        fireEvent.click(buttonElement)
        expect(screen.queryByTestId('task')).not.toBeInTheDocument()
    })
})
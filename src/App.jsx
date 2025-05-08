import React from 'react';
import { AppShell, Text, useMantineTheme } from '@mantine/core';
import AppNavbar from './components/navbar.jsx';

function App (){
    const theme = useMantineTheme();

    return (
        <AppShell
            padding="md"
            navbar={<AppNavbar/>}
            header={
            <AppShell.Header height={{ base:60, md:70}} p="md">
                <div style={{displau:'flex', alignItems:'center',height:'100%'}}>
                    <Text size="lg" weight={500}>
                        Task Manager
                    </Text>
                </div>
            </AppShell.Header>
    }
    styles={(theme) => ({
        main: {
            backgroundColor: theme.colorScheme ==='dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },

    })}
    >
        <Text>Welcome</Text>

        </AppShell>
    );

}

export default App

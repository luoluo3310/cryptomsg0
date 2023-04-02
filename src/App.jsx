import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Register from './Register';
import About from './About';
import NavBar from './NavBar';
import MainPage from './MainPage';
import { Flex, Box, Image, Link, Spacer, Button, Heading } from '@chakra-ui/react';
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useConnectors, useAccount, useNetwork, useTransactionReceipt } from '@starknet-react/core';


const App = () => {
  const [accounts, setAccounts] = useState(0);
  
  

  return (
    <div className='overlay' >
      <div className='App'>


        <Flex height="100vh" justifyContent="center"  >
          <Flex width="100%" bg="blue.400" direction="column" >
            
          <HashRouter>

            <NavBar accounts={accounts} setAccounts={setAccounts} />





              < Routes>

                <Route path='/' element={<MainPage accounts={accounts} setAccounts={setAccounts} />}></Route>
                <Route path='/register' element={<Register accounts={accounts} setAccounts={setAccounts} />}></Route>
                
                <Route path='/about' element={<About accounts={accounts} setAccounts={setAccounts} />}></Route>
              </ Routes>

            </HashRouter>

          </Flex>
        </Flex>
      </div>
    <div className='moving-background'></div>


    </div>



  )
}

export default App

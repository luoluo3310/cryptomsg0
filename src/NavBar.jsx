
import { Flex, Box, Image, Link, Spacer, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Facebook from './icon/facebook_32x32.png';
import Twitter from './icon/twitter_32x32.png';
import Email from './icon/email_32x32.png';
import * as Router from 'react-router-dom'

import { useConnectors, useAccount, useNetwork, useTransactionReceipt } from '@starknet-react/core';

//import { connect } from "@argent/get-starknet"
import { stark } from 'starknet';



const NavBar = ({ accounts, setAccounts }) => {
    const [isConnected, setConnected] = useState(false); // Status check
    
    const {connect , connectors, disconnect, available, refresh } = useConnectors()
    const { account, address, status } = useAccount()
    const { chain } = useNetwork()
   
   
   // const [hash, setHash] = useState(undefined)
    //const { data, loading, error } = useTransactionReceipt({ hash, watch: true })






    async function connectAccount() {
 
if(!isConnected){
// try {
//       const starknet = await connect();
//       await starknet.enable({
//         starknetVersion: "v4",
//       });

//     //  setAccount(starknet?.account);
//     } catch (e) {
//       console.error(e);
//     }


await connectors.map((connector) => connect(connector))
  
console.log("connectors   is : ",connectors)
    // const windowStarknet = await connect()
    // console.log("111111111")
    // await windowStarknet?.enable({ starknetVersion: "v4" })
    // console.log("2222")
    // console.log(windowStarknet.account)

    
    console.log("account is : ",account);
    console.log("address is : ",address);
    



//    // setAddress(windowStarknet.selectedAddress) // Set our address variable to windowStarknet.selectedAddress


     setConnected(true) // isConnected = true, the page will changed according to the boolean
     setAccounts(111)
            
           //  setAccounts(account);
            // console.log("accounts is :  ",accounts);
            // console.log("address is ",windowStarknet.selectedAddress);
            //  return windowStarknet 




        }
    }
    

   

    return (
        <Flex justify='space-between' align="center" padding="30px" >
            <Flex justify='space-around' width="40%" padding="0 75px" >
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="0 15px" ></Image>
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" ></Image>
                </Link>
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" ></Image>
                </Link>
            </Flex>

            <Flex justify='space-around' align="center" width="50%" padding="30px" >

                <Router.Link to='/' >
                    Send
                </Router.Link>


                <Router.Link to='/register' >
                    Register
                </Router.Link>


                <Router.Link to='/about' >
                    About
                </Router.Link>



                {isConnected ? (
                    <Box margin='0 15px'>Connected</Box>
                ) : (
                    <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}>Connect</Button>
                )}
            </Flex>


        </Flex>
    )
};
export default NavBar;

import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import Head from 'next/head'
import {Container} from '@mui/material'
import Typography from "@mui/material";
import Toolbar from "@mui/material";
import AppBar from "@mui/material";
import Button from "@mui/material";
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>FlashCard SaaS</title>
        <meta name = "description" content = "Create flashcard from your text"/>
      </Head>

      <AppBar position = "static">
        <Toolbar>
        <Typography variant = "h6"> Flashcard SaaS</Typography>
        <SignedOut>
          <Button> Login </Button>
          <Button> Sign Up </Button>
        </SignedOut>
        <SignedIn>
          <UserButton/> 
        </SignedIn>
        </Toolbar>
      </AppBar>
      
    </Container>
  );
}

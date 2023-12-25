import { ArrowRight, Send } from "@mui/icons-material";
import { Avatar, Box, Chip, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import ThemeCustomization from "./themes";

interface IRectTexts {
  top: string;
  bottom: string;
  send?: boolean
}

const Rect: React.FC<IRectTexts> = ({ top, bottom, send }) => {
  return (
    <Box width={'100%'} sx={{ border: 'solid black .0625rem', borderRadius: '.25rem', padding: '1rem' }} >
      <Grid container direction='row' alignItems='center' spacing={1} >
        <Grid item xs='auto' >
          {
            send

            &&

            <Chip
              color="success"
              label={<Send sx={{  color: 'green', rotate: '-45deg' }} />}
            />
          }
        </Grid>
        <Grid item xs container direction='row' justifyContent='space-between' alignItems='center' >
          <Grid item>
            <Stack alignItems='left' >
              <Typography variant="h5">{top}</Typography>
              <Typography variant="body1" color='textSecondary' >{bottom}</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <ArrowRight />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function App() {

  const names = [
    {
      value: 'John Smith',
      first: 'John',
      last: 'Smith',
      color: 'p',
      short: 'JS'
    },
    {
      value: 'Mary Johnson',
      color: '',
      first: 'Mary',
      last: 'Johnson',
      short: 'MJ'
    },
    {
      value: 'Kimberly Williams',
      color: '',
      first: 'Kimberly',
      last: 'Williams',
      short: 'KW'
    },
    {
      value: 'Michael Davis',
      color: '',
      first: 'Michael',
      last: 'Davis',
      short: 'MD'
    },
    {
      value: 'Lisa Thompson',
      color: '',
      first: 'Lisa',
      last: 'Thompson',
      short: 'LT'
    },
    {
      value: 'Ajani Abigail',
      color: '',
      first: 'Ajani',
      last: 'Abigail',
      short: 'AA'
    },
    {
      value: 'Keniv Taylor',
      color: '',
      first: 'Kevin',
      last: 'Taylor',
      short: 'KT'
    }
  ]

  return (
    <ThemeCustomization>
      <div className="App">
        <Box sx={{ boxShadow: 2, width: 'fit-content', height: 'fit-content', padding: 2 }} width={20} >
          <Stack alignItems='center' justifyContent='flex-start' spacing={1} >
            <Typography variant="h5" >Send</Typography>
            <Grid container direction='row' justifyContent='space-between'>
              <Grid item xs='auto' >
                <Typography variant="body1" >Beneficiaries</Typography>
              </Grid>
              <Grid item xs='auto' ml={2} >
                <Typography variant="h5" color='green' >View All</Typography>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='space-between' spacing={2} ml={-2} >
              {
                names.map((name: { value: string, color: string, short: string, first: string, last: string }, index: number) => {
                  return (
                    <Grid item xs='auto' key={index} >
                      <Stack alignItems='center' spacing={1} >
                        <Avatar sx={{ bgcolor: deepPurple[500], padding: '1rem' }} alt={name.value}>{name.short}</Avatar>
                        <Stack alignItems='center' spacing={0} >
                          <Typography variant='body2' lineHeight={1} >{name.first}</Typography>
                          <Typography variant='body2' >{name.last}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  );
                })
              }
            </Grid>
            <Grid container direction='column' >
              <Grid item mt={2} >
                <Rect top={'Postal Bank User'} bottom={'Send to any postal account for free.'} />
              </Grid>
              <Grid item mt={1}>
                <Rect top={'Send to Bank Account'} bottom={'Send to a local bank account.'} send />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </div>
    </ThemeCustomization>
  );
}

export default App;

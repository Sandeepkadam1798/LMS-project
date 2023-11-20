import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'

import styled from 'styled-components';


import Subject from "../Images/subjects.svg";
import Assignment from "../Images/assignment.svg";
import CountUp from 'react-countup';
import CircleChart from './CircleChart';

const ParentHomePage = () => {

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 ,}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Subject} alt="Subjects" />
                            <Title>
                                Total Subjects
                            </Title>

                            <Data start={0} end={10} duration={2.5} />
                            
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Assignment} alt="Assignments" />
                            <Title>
                                Total Assignments
                            </Title>
                            <Data start={0} end={15} duration={4} />
                            
                        </StyledPaper>

                        
                    </Grid>
                    <CircleChart/>
                    </Grid>
                    
                    </Container>
        </>
    )
}

const ChartContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

// const Data = styled(CountUp)`
//   font-size: calc(1.3rem + .6vw);
//   color: green;
// `;


const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

export default ParentHomePage
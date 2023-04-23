import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Checkbox, FormGroup, FormLabel } from '@mui/material/';
import emailjs from '@emailjs/browser';

const sheetdb = require("sheetdb-node");
const client = sheetdb({ address: 'ym9tuydragasb?sheet=JNF' });


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.nitdelhi.ac.in/Tnpcell/index.html">
                Traning & Placement Cell
            </Link>{' '}
            {new Date().getFullYear()}
            {' | Developed by '}
            <Link color="inherit" href="https://linkedin.com/in/umangkumarr">
                Umang Kumar
            </Link>
        </Typography>
    );
}

const FormData = {
    emailid: "",
    OrganizationName: "",
    IndustrySector: "",
    PostalAddress: "",
    Website: "",
    EligibileBranchesBTech: "",
    EligibileBranchesMTech: "",
    CGPA: "",
    eligibility: "",
    JobDesignation: "",
    JobResponsibilities: "",
    JobLocation: "",
    TrainingPeriod: "",
    ExpectedHires: "",
    RecruitmentProcess: "",
    stipend: "",
    AgreementBond: "",
    POCName: "",
    POCDesignation: "",
    POCContact: "",
    POCEmail: ""
}
const FormErrors = [{
    emailid: 1,
    OrganizationName: 1,
    IndustrySector: 1
},
{ CGPA: 1 }, {
    JobDesignation: 1,
    JobResponsibilities: 1,
    JobLocation: 1,
    TrainingPeriod: 1
}, {
    RecruitmentProcess: 1
}, {
    stipend: 1
}, {
    POCName: 1,
    POCDesignation: 1,
    POCContact: 1,
    POCEmail: 1
}]

const theme = createTheme();

export default function RecruitForm() {


    const CompanyDetailsForm = () => {

        const [Errors, setErrors] = React.useState({
            emailid: 0,
            OrganizationName: 0,
            IndustrySector: 0
        });

        function handleEmailChange(event) {
            const { name, value } = event.target;

            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            let errorval = re.test(value) ? 0 : 1;
            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[0][name] = errorval;
        }

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[0][name] = errorval;
        }

        function handleChange(event) {
            const { name, value } = event.target
            FormData[name] = value;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Company Details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField error={Errors['emailid']} required id="email" name="emailid"
                            label="Email ID" fullWidth type="email" onChange={handleEmailChange} autoComplete="on" variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField error={Errors['OrganizationName']} onChange={handleRequiredChange} required id="OrganizationName" name="OrganizationName" label="Name of Organization" fullWidth autoComplete="on" variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="IndustrySector" error={Errors['IndustrySector']} onChange={handleRequiredChange} name="IndustrySector" label="Industry Sector" fullWidth autoComplete="on" variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="PostalAddress" name="PostalAddress" label="Postal Address" fullWidth multiline autoComplete="on" variant="standard" onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="Website" name="Website" label="Website" fullWidth autoComplete="on" variant="standard" onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }


    const EligibilityForm = () => {

        const [Errors, setErrors] = React.useState({
            CGPA: 0
        });

        const cnt = {
            CSE: 0, ECE: 0, EEE: 0
        };

        const names = {
            CSE: "CSE, ", ECE: "ECE, ", EEE: "EEE, ", MECH: "MECH, ", ECE_VLSI: "ECE_VLSI, "
        }

        function handleBTech_branches(event) {
            const { name } = event.target
            cnt[name]++;
            FormData["EligibileBranchesBTech"] = "";
            for (let v in cnt) {
                if (cnt[v] % 2) {
                    FormData["EligibileBranchesBTech"] += names[v];
                }
            }
            var len = FormData["EligibileBranchesBTech"]
            if (FormData["EligibileBranchesBTech"].length > 2) {
                FormData["EligibileBranchesBTech"] = len.slice(0, -2);
            }
        }

        const cnt2 = {
            CSE: 0, ECE: 0, EEE: 0, MECH: 0, ECE_VLSI: 0
        };

        function handleMTech_branches(event) {
            const { name } = event.target
            cnt2[name]++;
            FormData["EligibileBranchesMTech"] = "";
            for (let v in cnt2) {
                if (cnt2[v] % 2) {
                    FormData["EligibileBranchesMTech"] += names[v];
                }
            }
            var len = FormData["EligibileBranchesMTech"]
            if (FormData["EligibileBranchesMTech"].length > 2) {
                FormData["EligibileBranchesMTech"] = len.slice(0, -2);
            }
        }

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[1][name] = errorval;
        }

        function handleChange(event) {
            const { name, value } = event.target
            FormData[name] = value;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Eligibility Criteria
                </Typography>
                <Grid container spacing={3}>
                    <Grid style={{ padding: '16px' }} container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormGroup sx={{ m: 1, width: '40ch', maxWidth: '90%' }} required >
                                <FormLabel required>Eligible Branches(B.Tech)</FormLabel>
                                <FormControlLabel control={<Checkbox />} onChange={handleBTech_branches} label="CSE" name="CSE" />
                                <FormControlLabel control={<Checkbox />} onChange={handleBTech_branches} label="ECE" name="ECE" />
                                <FormControlLabel control={<Checkbox />} onChange={handleBTech_branches} label="EEE" name="EEE" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup sx={{ m: 1, width: '40ch', maxWidth: '90%' }}>
                                <FormLabel>Eligible Branches(M.Tech)</FormLabel>
                                <FormControlLabel control={<Checkbox />} onChange={handleMTech_branches} label="CSE (Analytics)" name="CSE" />
                                <FormControlLabel control={<Checkbox />} onChange={handleMTech_branches} label="ECE" name="ECE" />
                                <FormControlLabel control={<Checkbox />} onChange={handleMTech_branches} label="EEE (Power Electronics and Drives)" name="EEE" />
                                <FormControlLabel control={<Checkbox />} onChange={handleMTech_branches} label="Mechanical (CAD/CAM)" name="MECH" />
                                <FormControlLabel control={<Checkbox />} onChange={handleMTech_branches} label="ECE(VLSI)" name="ECE_VLSI" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <TextField error={Errors['CGPA']} required id="CGPARequirement" name="CGPA" label="Minimum CGPA Requirement" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="eligibility" name="eligibility" label="Any other specific criteria for eligibility" fullWidth helperText="E.g. Date of Birth" autoComplete="on" variant="standard" multiline onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    const JobDescriptionForm = () => {

        const [Errors, setErrors] = React.useState({
            JobDesignation: 0,
            JobResponsibilities: 0,
            JobLocation: 0,
            TrainingPeriod: 0
        });

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[2][name] = errorval;
        }

        function handleChange(event) {
            const { name, value } = event.target
            FormData[name] = value;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Job Description
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField error={Errors['JobDesignation']} required id="JobDesignation" name="JobDesignation" label="Job Designation" fullWidth autoComplete="on" variant="standard" multiline onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={Errors['JobResponsibilities']} required id="ResponsibilitiesDetails" name="JobResponsibilities" label="Job Responsibilities and Details" fullWidth autoComplete="on" variant="standard" multiline onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={Errors['JobLocation']} required id="JobLocation" name="JobLocation" label="Job Location(s)" fullWidth autoComplete="on" variant="standard" multiline onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['TrainingPeriod']} required id="TrainingPeriod" name="TrainingPeriod" label="Training Period" fullWidth helperText="If any mention, NA if none" autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="ExpectedHires" name="ExpectedHires" label="No. of Expected Hires" fullWidth autoComplete="on" variant="standard" onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    const SelectionProcedureForm = () => {

        const [Errors, setErrors] = React.useState({
            RecruitmentProcess: 0
        });

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[3][name] = errorval;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Selection Procedure
                </Typography>
                <Grid item xs={12}>
                    <TextField error={Errors['RecruitmentProcess']} required id="outlined-multiline-flexible" name="RecruitmentProcess" label="Mention the detailed process of recruitment" fullWidth autoComplete="on" variant="standard" multiline onChange={handleRequiredChange}
                    />
                </Grid>

            </React.Fragment>
        );
    }

    const CompensationForm = () => {

        const [Errors, setErrors] = React.useState({
            AnnualSalary: 0,
            TotalEmolument: 0
        });

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[4][name] = errorval;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Compensation
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['stipend']} required id="stipend" name="stipend" label="Stipend" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    const POCForm = () => {

        const [Errors, setErrors] = React.useState({
            POCName: 0,
            POCDesignation: 0,
            POCContact: 0,
            POCEmail: 0
        });

        function handleRequiredChange(event) {
            const { name, value } = event.target;

            let errorval = value.length ? 0 : 1;

            setErrors(pre => { return { ...pre, [name]: errorval }; });
            FormData[name] = value;
            FormErrors[5][name] = errorval;
        }

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Point of Contact(POC) Details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['POCName']} required id="POC" name="POCName" label="Name of POC" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['POCDesignation']} required id="POCDesignation" name="POCDesignation" label="Designation of POC" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['POCContact']} required id="POCContact" name="POCContact" label="Contact number of POC" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Errors['POCEmail']} id="POCEmail" required name="POCEmail" label="Email id of POC" fullWidth autoComplete="on" variant="standard" onChange={handleRequiredChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    const steps = ['Company Details', 'Eligibility Criteria', 'Job Description', 'Selection Procedure', 'Compensation', 'Point of Contact(POC) Details',];

    function GetStepContent(step) {

        switch (step) {
            case 0:
                return <CompanyDetailsForm />;
            case 1:
                return <EligibilityForm />;
            case 2:
                return <JobDescriptionForm />;
            case 3:
                return <SelectionProcedureForm />
            case 4:
                return <CompensationForm />
            case 5:
                return <POCForm />
            default:
                throw new Error('Unknown step');
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [final_message, setMessage] = React.useState("Thank you for filling out the JNF Form.");


    const handleNext = () => {
        let check = 1;
        for (let v in FormErrors[activeStep]) {
            if (FormErrors[activeStep][v] === 1) check = 0;
        }

        if (check) {
            if (activeStep === steps.length - 1) {


                client.create(FormData).then(function (data) {
                    console.log(data);
                }, function (err) {
                    console.log(err);
                    setMessage("An error occured while sending data.")
                });

                emailjs.send('service_6gubn6q', 'template_ldwkxba', FormData, 'sRWlx1ZRk9dr8b7g3')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                        setMessage("An error occured while sending response to email.");
                    });
            }
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h4" variant="h4" align="center">
                        JNF/JAF Internship Form
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    {{final_message}}
                                </Typography>
                                <Typography variant="subtitle1">
                                    A copy of your response has been sent to the email address provided by you in the company details section.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <>
                                {GetStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button style={{ textDecorationColor: "#253053" }} onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        style={{ backgroundColor: "#253053" }}
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </Box>
                            </>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
import React, { useState } from "react";
import api from "../../services/AuthService";

function Application() {
    // --- Applicant Information States ---
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [gender, setGender] = useState("");
    const [nation, setNation] = useState("");
    const [nationalId, setNationalId] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [institution, setInstitution] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");

    // --- Research Information States ---
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [objectives, setObjectives] = useState("");
    const [methodology, setMethodology] = useState("");
    const [researchType, setResearchType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState("");
    const [currency, setCurrency] = useState("");
    const [fundingSource, setFundingSource] = useState("");
    const [expectedOutcomes, setExpectedOutcomes] = useState("");
    const [ethicalConsiderations, setEthicalConsiderations] = useState("");
    const [dataCollectionMethods, setDataCollectionMethods] = useState("");
    const [sampleSize, setSampleSize] = useState("");
    const [involvesHumanSubjects, setInvolvesHumanSubjects] = useState(false);
    const [involvesAnimals, setInvolvesAnimals] = useState(false);
    const [involvesSensitiveData, setInvolvesSensitiveData] = useState(false);

    // --- Application Information States ---
    const [applicationNo, setApplicationNo] = useState("");
    const [applicationType, setApplicationType] = useState("");
    const [applicationStatus, setApplicationStatus] = useState("");
    const [permitNumber, setPermitNumber] = useState("");
    const [rejectionReason, setRejectionReason] = useState("");
    const [officerNotes, setOfficerNotes] = useState("");

    // --- Options ---
    const ApplicationType = [
        { value: "FOREIGN_RESEARCHER", label: "Foreign Researcher/Filming" },
        { value: "LOCAL_RESEARCHER", label: "Local Researcher/Filming" },
        { value: "INSTITUTION_COMPANY", label: "Institution/Company Research" },
    ];

    const ApplicationStatus = [
        { value: "DRAFT", label: "Not yet submitted" },
        { value: "SUBMITTED", label: "Under initial review" },
        { value: "UNDER_REVIEW", label: "Being processed" },
        { value: "PENDING_PAYMENT", label: "Awaiting fee payment" },
        { value: "PAYMENT_COMPLETED", label: "Payment Completed" },
        { value: "APPROVED", label: "Permit issued" },
        { value: "REJECTED", label: "Application denied" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Get logged-in user info
        const userId = localStorage.getItem("userId");
        const storedFirstName = localStorage.getItem("firstName");
        const storedLastName = localStorage.getItem("lastName");
        const storedEmail = localStorage.getItem("email");

        if (!userId) {
            alert("⚠️ You must be logged in to submit an application.");
            return;
        }

        // ✅ Build backend-compatible payload
        const payload = {
            applicationNumber: applicationNo || "APP-" + Date.now(),
            applicationType,
            status: applicationStatus || "DRAFT",
            applicantId: userId,

            applicantInfo: {
                firstName: firstName || storedFirstName,
                lastName: lastName || storedLastName,
                email: email || storedEmail,
                phoneNumber,
                dateOfBirth: dob,
                gender,
                nationality: nation,
                passportNumber,
                nationalId,
                address,
                city,
                country,
                postalCode,
                institution,
                department,
                position,
            },

            researchInfo: {
                title,
                description,
                objectives,
                methodology,
                researchType,
                researchField: department || "General",
                startDate,
                endDate,
                location: city || country || "",
                budget: parseFloat(budget) || 0,
                currency,
                fundingSource,
                expectedOutcomes,
                ethicalConsiderations,
                dataCollectionMethods,
                sampleSize: parseInt(sampleSize) || 0,
                involvesHumanSubjects: true,
                involvesAnimals: false,
                involvesSensitiveData: true,
            },

            rejectionReason,
            officerNotes,
        };

        try {
            const res = await api.post("/application", payload); // ✅ automatic token injection
            alert("✅ Application submitted successfully!");
            console.log("Response:", res.data);
        } catch (error) {
            console.error("❌ Submission error:", error.response?.data || error.message);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };
    return (

        <div>
            <div className="card">
                <div className="card-body">
                    {/* <h2 className="sub-title fs-1">Applicant Information</h2> <br></br>  */}
                    <form className="row g-3" onSubmit={handleSubmit}>

                        <h2 className="sub-title fs-1">Applicant Information</h2> <br></br>
                        <hr />

                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="FIrst Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputPassword5" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" id="inputEmail5" placeholder='Date Of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Gender</label>
                            <select id="inputState" class="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option selected="">Choose...</option>
                                <option>Female</option>
                                <option>Male</option>
                                <option>Prefer Not To say</option>

                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Nationality</label>
                            <select id="inputState" class="form-select" value={nation} onChange={(e) => setNation(e.target.value)}>
                                <option selected="">Choose...</option>
                                <option value="opt1">Select Nation</option>
                                <option value="opt2">Algeria</option>
                                <option value="opt3">Angola</option>
                                <option value="opt4">Benin</option>
                                <option value="opt5">Botswana</option>
                                <option value="opt6">Burkina Faso</option>
                                <option value="opt7">Burundi</option>
                                <option value="opt8">Cabo Verde</option>
                                <option value="opt9">Cameroon</option>
                                <option value="opt10">Central African Republic</option>
                                <option value="opt11">Chad</option>
                                <option value="opt12">Comoros</option>
                                <option value="opt13">Congo (Republic of the)</option>
                                <option value="opt14">Congo (Democratic Republic of the)</option>
                                <option value="opt15">Djibouti</option>
                                <option value="opt16">Egypt</option>
                                <option value="opt17">Equatorial Guinea</option>
                                <option value="opt18">Eritrea</option>
                                <option value="opt19">Eswatini</option>
                                <option value="opt20">Ethiopia</option>
                                <option value="opt21">Gabon</option>
                                <option value="opt22">Gambia</option>
                                <option value="opt23">Ghana</option>
                                <option value="opt24">Guinea</option>
                                <option value="opt25">Guinea-Bissau</option>
                                <option value="opt26">Ivory Coast</option>
                                <option value="opt27">Kenya</option>
                                <option value="opt28">Lesotho</option>
                                <option value="opt29">Liberia</option>
                                <option value="opt30">Libya</option>
                                <option value="opt31">Madagascar</option>
                                <option value="opt32">Malawi</option>
                                <option value="opt33">Mali</option>
                                <option value="opt34">Mauritania</option>
                                <option value="opt35">Mauritius</option>
                                <option value="opt36">Morocco</option>
                                <option value="opt37">Mozambique</option>
                                <option value="opt38">Namibia</option>
                                <option value="opt39">Niger</option>
                                <option value="opt40">Nigeria</option>
                                <option value="opt41">Rwanda</option>
                                <option value="opt42">São Tomé and Príncipe</option>
                                <option value="opt43">Senegal</option>
                                <option value="opt44">Seychelles</option>
                                <option value="opt45">Sierra Leone</option>
                                <option value="opt46">Somalia</option>
                                <option value="opt47">South Africa</option>
                                <option value="opt48">South Sudan</option>
                                <option value="opt49">Sudan</option>
                                <option value="opt50">Tanzania</option>
                                <option value="opt51">Togo</option>
                                <option value="opt52">Tunisia</option>
                                <option value="opt53">Uganda</option>
                                <option value="opt54">Zambia</option>
                                <option value="opt55">Zimbabwe</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Passport Number</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Passport Number' value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)} />
                        </div>



                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">National Id</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='National Id' value={nationalId} onChange={(e) => setNationalId(e.target.value)} />
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Address</label>
                            <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Country</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Postal Code</label>
                            <input type="text" className="form-control" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Institution</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Institution' value={institution} onChange={(e) => setInstitution(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Position</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Position' value={position} onChange={(e) => setPosition(e.target.value)} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputName5" className="form-label">Department</label>
                            <input type="text" className="form-control" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                        </div>
                        <br /><br />



                        <h2 className="sub-title fs-1">Research Information</h2> <br></br>

                        <hr />

                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Tittle</label>
                            <input type="text" className="form-control" placeholder="Tittle" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Description</label>
                            <input type="text" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Objectives</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Objectives' value={objectives} onChange={(e) => setObjectives(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Methodology</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Methodology' value={methodology} onChange={(e) => setMethodology(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Research Type</label>
                            <input type="text" className="form-control" placeholder="Research Type" value={researchType} onChange={(e) => setResearchType(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Research Field</label>
                            <input type="text" className="form-control" placeholder="Research Type" value={researchType} onChange={(e) => setResearchType(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="inputEmail5" placeholder='Start Date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="inputPassword5" placeholder='End Date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputLocation" className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        {/* <div className="col-md-4">
                            <label htmlFor="inputBudget" className="form-label">Budget</label>
                            <input type="text" className="form-control" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
                        </div> */}
                        <div className="col-md-4">
                            <label htmlFor="inputBudget" className="form-label">Budget</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Budget"
                                value={budget}
                                onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
                                min="0"
                                step="0.01"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Currency</label>
                            <input type="text" className="form-control" id="currency" placeholder='Currency' value={currency} onChange={(e) => setCurrency(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Funding Source</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Funding Source' value={fundingSource} onChange={(e) => setFundingSource(e.target.value)} />
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Expected Outcomes</label>
                            <input type="text" className="form-control" placeholder="Expected Outcomes" value={expectedOutcomes} onChange={(e) => setExpectedOutcomes(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Ethical Considerations</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Ethical Considerations' value={ethicalConsiderations} onChange={(e) => setEthicalConsiderations(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword5" className="form-label">Data Collection Methods</label>
                            <input type="text" className="form-control" id="inputPassword5" placeholder='Data Collection Methods' value={dataCollectionMethods} onChange={(e) => setDataCollectionMethods(e.target.value)} />
                        </div>



                        {/* <div className="col-md-12">
                            <label htmlFor="inputName5" className="form-label">Sample Size</label>
                            <input type="number" className="form-control" placeholder="Sample Size" value={sampleSize} onChange={(e) => setSampleSize(e.target.value)} />
                        </div> */}

                        <div className="col-md-12 mb-3">
                            <label htmlFor="sampleSize" className="form-label">Sample Size</label>
                            <input
                                type="number"
                                className="form-control"
                                id="sampleSize"
                                placeholder="Enter sample size"
                                value={sampleSize}
                                onChange={(e) => setSampleSize(e.target.value)}
                                min="0"
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label className="form-label d-block">Research Involves</label>
                            <div className="d-flex flex-wrap gap-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="involvesHumanSubjects"
                                        checked={involvesHumanSubjects || false}
                                        onChange={(e) => setInvolvesHumanSubjects(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="involvesHumanSubjects">
                                        Human Subjects
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="involvesAnimals"
                                        checked={involvesAnimals || false}
                                        onChange={(e) => setInvolvesAnimals(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="involvesAnimals">
                                        Animals
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="involvesSensitiveData"
                                        checked={involvesSensitiveData || false}
                                        onChange={(e) => setInvolvesSensitiveData(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="involvesSensitiveData">
                                        Sensitive Data
                                    </label>
                                </div>
                                {/* <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="involvesSensitiveData"
                                        checked={involvesSensitiveData}
                                        onChange={(e) => setInvolvesSensitiveData(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="involvesSensitiveData">
                                        Sensitive Data
                                    </label>
                                </div> */}
                            </div>
                        </div>



                        <h2 className="sub-title fs-1">Applicantion Information</h2> <br></br>

                        <hr />
                        {/* <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Application No</label>
                            <input type="text" className="form-control" placeholder="Application No" value={applicationNo} onChange={(e) => setApplicationNo(e.target.value)} />
                        </div> */}

                        <div className="col-md-4">
                            <label className="form-label">Application Type</label>
                            <select
                                className="form-control" name="applicationType" value={applicationType} onChange={(e) => setApplicationType(e.target.value)}
                            >
                                <option value="">--- Select Application Type ---</option>
                                {ApplicationType.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* <div className="col-md-4">
                            <label className="form-label">Application Status</label>
                            <select className="form-control" name="applicationStatus" value={applicationStatus} onChange={(e) => setApplicationStatus(e.target.value)}>
                                <option value="">--- Select Application Status ---</option>
                                {ApplicationStatus.map((status) => (
                                    <option key={status.value} value={status.value}>
                                        {status.label}
                                    </option>
                                ))}
                            </select>
                        </div> */}

                        {/* <div className="col-md-4">
                            <label htmlFor="inputName5" className="form-label">Permit Number</label>
                            <input type="text" className="form-control" placeholder="Permit Number" value={permitNumber} onChange={(e) => setPermitNumber(e.target.value)} />
                        </div> */}
                        {/* <div className="col-md-4">
                            <label htmlFor="inputEmail5" className="form-label">Rejection Reason</label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Rejection Reason' value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)} />
                        </div> */}
                        {/* <div className="col-md-12">
                            <label htmlFor="inputEmail5" className="form-label">Officer Notes </label>
                            <input type="text" className="form-control" id="inputEmail5" placeholder='Officer Notes ' value={officerNotes} onChange={(e) => setOfficerNotes(e.target.value)} />
                        </div> */}
                        <br /><br /><br /><br /><br />

                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>


            {/* <div className="card">
                <div className="card-body">

                    <form className="row g-3">




                    </form>
                </div>
            </div> */}




        </div>
    );
}

export default Application;

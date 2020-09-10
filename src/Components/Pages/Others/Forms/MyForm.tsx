import React from 'react';

export interface MyFormProps {

}

export interface MyFormState {

}

class MyForm extends React.Component<MyFormProps, MyFormState> {
    render() {
        return (
            <>


                <div className="testbox">
                    <form action="/">
                        <div className="banner">
                            <h1>Research Application Form</h1>
                        </div>
                        <div className="item">
                            <p>Title of Research Proposal</p>
                            <input type="text" name="name" />
                        </div>
                        <div className="item">
                            <p>Date</p>
                            <input type="date" name="bdate" required />
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h5>1. Principal Investigator:</h5>
                        <div className="item">
                            <p>Name and Credentials<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <div className="item">
                            <p>Mailing Address<span className="required">*</span></p>
                            <input type="text" name="name" placeholder="Street address" required />
                            <input type="text" name="name" placeholder="Street address line 2" required />
                            <div className="city-item">
                                <input type="text" name="name" placeholder="City" required />
                                <input type="text" name="name" placeholder="Region" required />
                                <input type="text" name="name" placeholder="Postal / Zip code" required />
                                <select required>
                                    <option value="">Country</option>
                                    <option value="1">Russia</option>
                                    <option value="2">Germany</option>
                                    <option value="3">France</option>
                                    <option value="4">Armenia</option>
                                    <option value="5">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="item">
                            <p>Phone<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <div className="item">
                            <p>Fax</p>
                            <input type="text" name="name" />
                        </div>
                        <div className="item">
                            <p>Email<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <h5>2. Co-Investigator:</h5>
                        <div className="item">
                            <p>Name and Credentials<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <div className="item">
                            <p>Mailing Address<span className="required">*</span></p>
                            <input type="text" name="name" placeholder="Street address" required />
                            <input type="text" name="name" placeholder="Street address line 2" required />
                            <div className="city-item">
                                <input type="text" name="name" placeholder="City" required />
                                <input type="text" name="name" placeholder="Region" required />
                                <input type="text" name="name" placeholder="Postal / Zip code" required />
                                <select required>
                                    <option value="">Country</option>
                                    <option value="1">Russia</option>
                                    <option value="2">Germany</option>
                                    <option value="3">France</option>
                                    <option value="4">Armenia</option>
                                    <option value="5">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="item">
                            <p>Phone<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <div className="item">
                            <p>Fax</p>
                            <input type="text" name="name" />
                        </div>
                        <div className="item">
                            <p>Email<span className="required">*</span></p>
                            <input type="text" name="name" required />
                        </div>
                        <h5>3. Institute Member</h5>
                        <div className="question">
                            <p>Principle investigator:<span className="required">*</span></p>
                            <div className="question-answer">
                                <input type="radio" value="none" id="radio_1" name="investigator" required />
                                <label htmlFor="radio_1" className="radio"><span>Yes</span></label>
                                <input type="radio" value="none" id="radio_2" name="investigator" required />
                                <label htmlFor="radio_2" className="radio"><span>No</span></label>
                            </div>
                        </div>
                        <div className="question">
                            <p>Co-Investigator:<span className="required">*</span></p>
                            <div className="question-answer">
                                <input type="radio" value="none" id="radio_3" name="co-investigator" required />
                                <label htmlFor="radio_3" className="radio"><span>Yes</span></label>
                                <input type="radio" value="none" id="radio_4" name="co-investigator" required />
                                <label htmlFor="radio_4" className="radio"><span>No</span></label>
                            </div>
                        </div>
                        <h5>4. Have you applied for or are you now receiving funding support for this research?</h5>
                        <div className="question">
                            <p><span className="required">*</span></p>
                            <div className="question-answer">
                                <input type="radio" value="none" id="radio_5" name="research" required />
                                <label htmlFor="radio_5" className="radio"><span>Yes</span></label>
                                <input type="radio" value="none" id="radio_6" name="research" required />
                                <label htmlFor="radio_6" className="radio"><span>No</span></label>
                            </div>
                        </div>
                        <h5>5. IRB:</h5>
                        <div className="question">
                            <p>Have you applied for IRB review:</p>
                            <div className="question-answer">
                                <input type="radio" value="none" id="radio_7" name="IRB" />
                                <label htmlFor="radio_7" className="radio"><span>Yes</span></label>
                                <input type="radio" value="none" id="radio_8" name="IRB" />
                                <label htmlFor="radio_8" className="radio"><span>No</span></label>
                            </div>
                        </div>
                        <h5>6. Students only:</h5>
                        <div className="item">
                            <p>Name of research advisor:</p>
                            <input type="text" name="name" />
                        </div>
                        <div className="item">
                            <p>Include a letter of support from advisor in application packet.<span className="required">*</span></p>
                            <textarea required></textarea>
                        </div>
                        <div className="question">
                            <p>Research Application Checklist:<span className="required">*</span></p>
                            <small>Please include the following in your application.</small>
                            <div className="question-answer checkbox-item">
                                <div>
                                    <input type="checkbox" value="none" id="check_1" name="checklist" required />
                                    <label htmlFor="check_1" className="check"><span>Proposal Cover Form</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_2" name="checklist" required />
                                    <label htmlFor="check_2" className="check"><span>Abstract</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_3" name="checklist" required />
                                    <label htmlFor="check_3" className="check"><span>Narrative</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_4" name="checklist" required />
                                    <label htmlFor="check_4" className="check"><span>Budget and Budget Justification</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_5" name="checklist" required />
                                    <label htmlFor="check_5" className="check"><span>Timeframe</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_6" name="checklist" required />
                                    <label htmlFor="check_6" className="check"><span>References</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_7" name="checklist" required />
                                    <label htmlFor="check_7" className="check"><span>Appendices</span></label>
                                </div>
                                <div>
                                    <input type="checkbox" value="none" id="check_8" name="checklist" required />
                                    <label htmlFor="check_8" className="check"><span>Bio Sketch</span></label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="question">
                            <p>If funding is approved I agree to do the following:<span className="required">*</span></p>
                            <div className="question-answer checkbox-item">
                                <div>
                                    <input type="checkbox" value="none" id="check_9" name="check" required />
                                    <label htmlFor="check_9" className="check"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">terms of service.</a></span></label>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p>Electronic signature<span className="required">*</span></p>
                            <textarea required></textarea>
                        </div>
                        <div className="btn-block">
                            <button type="submit" >Send Application</button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default MyForm;
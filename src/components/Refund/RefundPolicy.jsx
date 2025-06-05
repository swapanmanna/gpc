import React from "react";
import MetaTags from "../MetaTags";

export default function RefundPolicy() {
    return (
        <>
            <MetaTags
                title="Refund Policy – Global Professional Certifications"
                description="Review our refund and cancellation policy before enrolling. We aim to ensure a smooth learning experience."
                canonicalUrl="https://globalprofessionalcertifications.com/refund"
            />
            <div className="w-full bg-gray-50">
                <div className="pt-32 max-w-6xl mx-auto pb-20 text-brand-dark w-full">
                    <h3 className="font-bold text-xl">Refund Policy</h3>
                    <br></br>
                    <p>At Young Stalwart Consulting LLP, under the brand name Global Professional Certifications, we are committed to delivering high-quality professional certification programs and ensuring customer satisfaction. We understand that occasionally, you may require a refund due to unforeseen circumstances. Please read the following refund and international payment policy carefully. </p>
                    <br></br>
                    <h3 className="font-bold text-xl">If a refund request is made and approved in accordance with our terms and conditions, the following timelines and procedures will apply:</h3>
                    <br></br>
                    <ul className="list-disc ml-8">
                        <li><span className="font-bold">Refund Turnaround Time: </span>Once the refund is approved, it will be processed within 5 to 7 working days. </li>
                        <br></br>
                        <li><span className="font-bold">Credit to Bank Account: </span>After processing, the refunded amount will be credited back to the original method of payment or the customer’s bank account within an additional <span className="font-bold">5 to 7 working days</span>, depending on the banking partner and transaction processing times.</li>
                        <br></br>
                        <li><span className="font-bold">Communication: </span>Customers will be notified via email once the refund has been initiated. Please ensure that your registered email address and banking details are up to date to avoid any delays.</li>
                        <br></br>
                    </ul>
                    <h3 className="font-bold text-xl">International Payment Policy</h3>
                    <br></br>
                    <p>To ensure secure and seamless international transactions for our global learners: </p>
                    <br></br>
                    <ul className="list-disc ml-8">
                        <li>We have activated the <span className="font-bold">3D Secure (3Ds)</span> feature for all international payments.</li>
                        <br></br>
                        <li>This added security layer means <span className="font-bold">every international transaction will require OTP (One-Time Password) verification</span> to successfully process the payment.</li>
                        <br></br>
                        <li>This step has been introduced to prevent unauthorized transactions and enhance the safety of cross-border payments.</li>
                        <br></br>
                    </ul>
                    <p>We request customers transacting internationally to ensure their bank/card provider supports OTP-based authentication for a smooth payment experience.</p><br></br>
                    <h3 className="font-bold text-xl">Need Help?</h3>
                    <br></br>
                    <p>If you have any queries related to refunds or international transactions, please feel free to contact our support team at <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="underline hover:text-brand-blue">
                            cia@globalprofessionalcertifications.com
                        </a>. We are here to assist you and ensure a transparent and hassle-free experience. </p>
                    <br></br>
                    <p>By purchasing from Global Professional Certifications, you acknowledge and agree to this refund policy.</p>
                </div>
            </div>
        </>
    )
}
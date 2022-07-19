import React, { Component } from "react";
import Bone from '../portfolio/bone.png';
import Lungs from '../portfolio/lungs.png';
import Urinary from '../portfolio/urinary.png';
import Skin from '../portfolio/skin.png';
import Eye from '../portfolio/eye.png';
import Meningitis from '../portfolio/meningitis.png';
import Gender from '../portfolio/gender.png';
import Hospital from '../portfolio/hospital.png';
import Parasite from '../portfolio/parasite.png';
import Intestines from '../portfolio/intestines.png';
import Blood from '../portfolio/blood.png';

class PrimaryGuidelines extends Component {
    render() {
      return (

            <section className="page-section1 portfolio" id="interGuidelines">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Intermediate Care Guidelines
                    </h2>

                    <hr></hr>
                    <div className="row " id="managingInfectionsIC">
                        
                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICBone" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="bone" className="img-fluid rounded-circle"
                                    src={Bone} />
                                <p className="text-center">Bone and Joint</p>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICURTI" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="lungs" className="img-fluid rounded-circle"
                                    src={Lungs} />
                                <p className="text-center">Upper Respiratory Tract</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICUTI" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="urinary" className="img-fluid rounded-circle"
                                    src={Urinary} />
                                <p className="text-center">Urinary Tract Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICSkin" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="skin" className="img-fluid rounded-circle"
                                    src={Skin} />
                                <p className="text-center">Skin &amp; Soft Tissue Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#PCEye" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="eye" className="img-fluid rounded-circle"
                                    src={Eye} />
                                <p className="text-center">Ophthalmology Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#PCmen" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="meningitis" className="img-fluid rounded-circle"
                                    src={Meningitis} />
                                <p className="text-center">Meningitis</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICGTI" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="genitalinfections" className="img-fluid rounded-circle"
                                    src={Gender} />
                                <p className="text-center">Genital Tract Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICLRTI" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="lungs" className="img-fluid rounded-circle"
                                    src={Lungs} />
                                <p className="text-center">Lower Respiratory Tract Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#PCHCAI" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="healthcareinfections" className="img-fluid rounded-circle"
                                    src={Hospital} />
                                <p className="text-center">Healthcare Associated Infections</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#PCParasite" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="parasites" className="img-fluid rounded-circle"
                                    src={Parasite} />
                                <p className="text-center">Parasites</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICGastro" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="gastronintestinal" className="img-fluid rounded-circle"
                                    src={Intestines} />
                                <p className="text-center">Gastrointestinal</p>
                            </div>
                        </div>

                        <div className="col-xs-8 col-md-4 mb-3">
                            <div className="portfolio-item mx-auto" data-target="#ICSepsis" data-toggle="modal">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"> </div>
                                </div>
                                <img alt="healthcareinfections" className="img-fluid rounded-circle"
                                    src={Blood} />
                                <p className="text-center">Sepsis Syndrome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PrimaryGuidelines;
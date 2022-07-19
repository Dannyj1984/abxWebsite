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
 
class IntermediateGeneral extends Component {
    render() {
      return (
        <div className="container">
            <h3 className="mb-0 text-center">Primary / Urgent Care Guidelines</h3>
            

            <div>
            <div className="row pb-2" id="managingInfectionsPC">
				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#PCBone" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="bone" className="img-fluid rounded-circle"
							src={Bone} />
						<p className="text-center">Bone and Joint</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#PCURT" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#PCUTI" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#PCSkin" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#PCGT" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="genital" className="img-fluid rounded-circle"
							src={Gender} />
						<p className="text-center">Genital Tract Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#PCLRT" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#PCGastro" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="gastrointestinal" className="img-fluid rounded-circle"
							src={Intestines} />
						<p className="text-center">Gastrointestinal</p>
					</div>
				</div>
			</div>
            </div>
        </div>

        
      );
    }
  }
   
  export default IntermediateGeneral;
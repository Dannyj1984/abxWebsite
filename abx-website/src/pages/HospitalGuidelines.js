import React, { Component } from "react";
import Bone from '../portfolio/bone.png';
import Lungs from '../portfolio/lungs.png';
import Urinary from '../portfolio/urinary.png';
import Skin from '../portfolio/skin.png';
import Eye from '../portfolio/eye.png';
import Meningitis from '../portfolio/meningitis.png';
import Gender from '../portfolio/gender.png';
import Intestines from '../portfolio/intestines.png';
import Blood from '../portfolio/blood.png';
import Virus from '../portfolio/virus.png';
import Uterus from '../portfolio/uterus.png';
import Baby from '../portfolio/baby.png';
import Head from '../portfolio/head.png';
import Ent from '../portfolio/ent.png';
import Cardio from '../portfolio/cardio.png';
import Tooth from '../portfolio/tooth.png';
 
class HospitalGuidelines extends Component {
    render() {
      return (
		<div className="page-section1 portfolio" id="hospGuidelines">
		<div className="container">
			<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Hospital Guidelines</h2>

			<hr />
			<div className="row collapse hide text-center" id="managingInfectionsH">
				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdults" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">A&amp;E
							Adults</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaeds" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">A&amp;E
							Paediatrics</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto">
						<div className="column text-center"><button aria-controls="AdInHC" aria-expanded="false"
								className="btn btn-primary general" data-target="#AdInHC" data-toggle="collapse"
								onclick="onlyAdInpat()" type="button">Adult Inpatients</button></div>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto">
						<div className="column text-center"><button aria-controls="PaedInHC" aria-expanded="false"
								className="btn btn-primary general" data-target="#PaedInHC" data-toggle="collapse"
								onclick="onlyPaedInpat()" type="button">Paediatric Inpatients</button></div>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto">
						<div className="column text-center"><button aria-controls="HCGeneralGuidelines"
								aria-expanded="false" className="btn btn-primary general" data-target="#HCGeneralGuidelines"
								data-toggle="collapse" onclick="onlyHospGuide()" type="button">General Guidance</button>
						</div>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto">
						<div className="column text-center"><button aria-controls="HCProphylaxis" aria-expanded="false"
								className="btn btn-primary general" data-target="#HCProphylaxis" data-toggle="collapse"
								onclick="onlyProph()" type="button">Prophylaxis</button></div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row collapse hide pb-2" id="AdInHC" style={{"display":"none"}}>
				<div className="col-lg-12">
					<h3 className="text-center">Adult Inpatients</h3>

					<hr />
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdBlood" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="healthcareinfections" className="img-fluid rounded-circle"
							height="400px"
							src={Blood}
							width="400px" />
						<p className="text-center">Bloodstream Infections and Sepsis Syndrome</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdBoneJoint" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="bone" className="img-fluid rounded-circle"
							src="assets/img/portfolio/bone.png" />
						<p className="text-center">Bone and Joint Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdCardio" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="cardiovascular" className="img-fluid rounded-circle"
							src={Cardio} />
						<p className="text-center">Cardiovascular Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdCNS" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="meningitis" className="img-fluid rounded-circle"
							src={Meningitis} />
						<p className="text-center">Central Nervous System Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdDental" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="Dental" className="img-fluid rounded-circle"
							src={Tooth} />
						<p className="text-center">Dental Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdENT" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="ent" className="img-fluid rounded-circle"
							src={Ent} />
						<p className="text-center">Ear, Nose &amp; Throat Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdEye" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#HCAdFungal" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="fungal" className="img-fluid rounded-circle"
							src={Virus} />
						<p className="text-center">Fungal Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdGastro" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="gastroinfections" className="img-fluid rounded-circle"
							src={Intestines} />
						<p className="text-center">Gastrointestinal Tract / Intra-abdominal Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdGynae" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="gynaecology" className="img-fluid rounded-circle"
							src={Uterus} />
						<p className="text-center">Gynaecological Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdHead" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="head" className="img-fluid rounded-circle"
							src={Head} />
						<p className="text-center">Head &amp; Neck Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdObstetric" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="obstetrics" className="img-fluid rounded-circle"
							src={Baby} />
						<p className="text-center">Obstetric Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdResp" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="lungs" className="img-fluid rounded-circle"
							src={Lungs} />
						<p className="text-center">Respiratory Tract Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdSTI" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="genitalinfections" className="img-fluid rounded-circle"
							src={Gender} />
						<p className="text-center">Sexually Transmitted Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdSkin" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="skin" className="img-fluid rounded-circle"
							src={Skin} />
						<p className="text-center">Skin and Soft Tissue Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCAdUTI" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="urinary" className="img-fluid rounded-circle"
							src={Urinary} />
						<p className="text-center">Urinary Tract Infections</p>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row collapse hide pb-2" id="PaedInHC" style={{"display":"none"}}>
				<div className="col-lg-12">
					<h3 className="text-center">Paediatric Inpatients</h3>

					<hr />
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedBlood" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="healthcareinfections" className="img-fluid rounded-circle"
							src={Blood} />
						<p className="text-center">Bloodstream Infections and Sepsis Syndrome</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedBoneJoint" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="bone" className="img-fluid rounded-circle"
							src={Bone} />
						<p className="text-center">Bone and Joint Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedCNS" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="meningitis" className="img-fluid rounded-circle"
							src={Meningitis} />
						<p className="text-center">Central Nervous System Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedENT" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="ent" className="img-fluid rounded-circle"
							src={Ent} />
						<p className="text-center">Ear, Nose &amp; Throat Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedEye" data-toggle="modal">
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
					<div className="portfolio-item mx-auto" data-target="#HCPaedGastro" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="gastronintestinal" className="img-fluid rounded-circle"
							src={Intestines} />
						<p className="text-center">Gastrointestinal Tract / Intra-abdominal Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedResp" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="lungs" className="img-fluid rounded-circle"
							src={Lungs} />
						<p className="text-center">Respiratory Tract Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedSkin" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="skin" className="img-fluid rounded-circle"
							src={Skin}/>
						<p className="text-center">Skin and Soft Tissue Infections</p>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPaedUTI" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<img alt="urinary" className="img-fluid rounded-circle"
							src={Urinary} />
						<p className="text-center">Urinary Tract Infections</p>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row collapse hide pb-2" id="HCGeneralGuidelines" style={{"display":"none"}}>
				<div className="col-lg-12">
					<h3 className="text-center">General Guidance</h3>

					<hr />
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCEditors" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button
							className="btn btn-primary general">Editors</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3 ">
					<div className="portfolio-item mx-auto" data-target="#HCLatest" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Latest
							Updates</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCObjectives" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button
							className="btn btn-primary general">Objectives</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCDecCDiff" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Decreasing
							Clostridium Difficile</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCResistantOrgs" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Preventing
							Resistant Organisms</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPenAllergy" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Penicillin
							Allergy</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCApRx" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button
							className="btn btn-primary general">Appropriate Prescribing</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCDrugMonitoring" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button
							className="btn btn-primary general">Therapeutic Drug Monitoring</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCPropbiotics" data-toggle="modal">
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCIVOral" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">IV to Oral
							Switch</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCReferences" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button
							className="btn btn-primary general">References</button>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row collapse hide pb-2" id="HCProphylaxis" style={{"display":"none"}}>
				<div className="col-lg-12">
					<h3 className="text-center">Prophylaxis</h3>

					<hr />
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCMedProph" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Medical
							Prophylaxis</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#MRSAERAD" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">MRSA
							Eradication</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCProphObsGynae" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Obstetrics
							and Gynaecology</button>
					</div>
				</div>

				<div className="col-xs-8 col-md-4 mb-3">
					<div className="portfolio-item mx-auto" data-target="#HCProphSurg" data-toggle="modal">
						<div
							className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
							<div className="portfolio-item-caption-content text-center text-white"> </div>
						</div>
						<button className="btn btn-primary general">Surgical
							Prophylaxis</button>
					</div>
				</div>
			</div>
		</div>
	</div>
        
      );
    }
  }
   
  export default HospitalGuidelines;
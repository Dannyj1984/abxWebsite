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
 
class PrimaryGuidelines extends Component {
    render() {

		

		const openTamesideIob = () => {
			var x = document.getElementById('iobGM');
			var y = document.getElementById('TamesideIob');
			if (y.style.display === "none") {
				y.style.display = "block";
			} else {
				y.style.display = "none";
			}
			if (x.style.display === "block") {
				x.style.display = "none";
			}
		}
		const openIob = () => {
			var x = document.getElementById('iobGM');
			var y = document.getElementById('TamesideIob');
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
			if (y.style.display === "block") {
				y.style.display = "none";
			}
		}
      return (
        <div className="container">
            <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">Primary / Urgent Care Guidelines</h3>

            <div className="divider-custom"> 
                <div className="divider-custom-line"></div>                                     
                                    <hr></hr>                   
                <div className="divider-custom-line"></div>                                     
            </div>

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
			{/* <!--Primary care-->
	<!--  Modals-->
	<!-- Bone and Joint section--> */}

	<div aria-hidden="true" aria-labelledby="BoneAndJointLabel" className="portfolio-modal modal fade " id="PCBone"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="BoneAndJointLabel">Bone and Joint</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4><a href="/primary/guidelines/#iob" id="PCBoneSection">Infected Olecrenon Bursitis</a></h4>

								<h4><a href="#osteomyelitis">Osteomyelitis</a></h4>
								<br />
								{/* <!--Infective oclernon bursitis--> */}
								<div className="text-left border border-info rounded" id="iobSection">
									<h2 className="text-center" id="iob">Infected Olecrenon Bursitis</h2>
									<div className="text-center">
										<button className="btn btn-primary mr-3" onClick={openTamesideIob}>Tameside</button>
										<button className="btn btn-primary" onClick={openIob}>GM Wide</button>
										<div className="mb-3"></div>
									</div>
									<div id="iobGM" style={{"display":"none"}}>
									<h2 className="text-danger">Please note - You are viewing the GM wide guidelines. Guidance for Tameside may differ from these.</h2>
									<p>Bursitis occurs when the bursa is irritated and inflamed and is generally
										classified as. </p>

									<p>Non-septic (most common) - sterile inflammation resulting from various causes
										including trauma or overuse. </p>

									<p>Septic - infection resulting from seeding of the bursal sac with micro-organisms,
										usually bacteria.  Olecranon bursitis is more common in:</p>

									<ul>
										<li>Athletes who play sports which involve repetitive overhead throwing or elbow
											flexion and extension.</li>
										<li>People in jobs which involve risk of regular elbow trauma or pressure on the
											bursa. For example gardeners and mechanics.</li>
										<li>Young or middle-aged men. </li>
									</ul>

									<p>Most cases of olecranon bursitis resolve without complications; however,
										recurrent episodes may occur especially after recurrent minor trauma.</p>
									{/* <!--Start accordian--> */}

									<div id="accordionIob">
										<div className="card">
											<div className="card-header" id="iobTreatment">
												<h5 className="mb-0"><button aria-controls="collapseIobTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseIobTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="iobTreatment" className="collapse"
												data-parent="#accordionIob" id="collapseIobTreatment">
												<div className="card-body text-left">
													<p>1st choice - <span style={{"color":"#330099"}}><strong>Flucloxacillin
																1g QDS 5 days</strong></span></p>

													<p>2nd choice - <span style={{"color":"#990065"}}><strong>Clindamycin
																450mg QDS for 5 days</strong></span></p>
												</div>
											</div>
										</div>
									</div>
									</div>

									<div id="TamesideIob" style={{"display":"none"}}>
									<h2 className="text-danger">Please note - This section is specific to Tameside, please see the GM section for other areas</h2>
									<p> Tameside IOB guidelines </p>

									
									</div>

									
								</div>
								<br />
								{/* <!--Osteomyelitis--> */}
								<div className="text-left border border-info rounded">
									<h2 className="text-center" id="osteomyelitis">Osteomyelitis</h2>

									<p>Osteomyelitis could be suspected if the following are seen:</p>

									<ul>
										<li>Wound probing to bone</li>
										<li>sequestrated bone removed from wound</li>
										<li>static ulceration not responding to treatment (first address soft tissue
											infection, mechanical causes, ischaemia, co-morbidities)</li>
										<li>history of soft tissue infection increases suspicion</li>
										<li>&ldquo;Sausage toe&rdquo;</li>
									</ul>
									{/* <!--Accordion--> */}

									<div id="accordion1">
										<div className="card">
											<div className="card-header" id="osteoManagement">
												<h5 className="mb-0"><button aria-controls="collapseOsteoManagement"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseOsteoManagement" data-toggle="collapse"
														type="button">Management</button></h5>
											</div>

											<div aria-labelledby="osteoManagement" className="collapse"
												data-parent="#accordion1" id="collapseOsteoManagement">
												<div className="card-body text-left">
													<ul>
														<li>Arrange x-ray to rule out osteomyelitis</li>
														<li>Collect and send any bone fragments to microbiology for
															culture and sensitivity</li>
														<li>Whilst results of x-ray awaited, treat any signs or symptoms
															of soft tissue infection using the CCG guidelines.  If
															the infection does not respond to treatment liaise with
															microbiology.</li>
														<li>Refer patient to High Risk Foot Team for assessment and
															treatment plan advice (email:  <a
																href="mailto:integrated.diabetes@tgh.nhs.uk"
																target="_blank" rel="noreferrer">integrated.diabetes@tgh.nhs.uk</a>)</li>
													</ul>

													<p><strong>If radiology report diagnoses osteomyelitis: 
														</strong></p>

													<p>Liaise with microbiology around individualised treatment plan for
														patient.</p>

													<p><strong>Dr H Sacho </strong>0161 922 4086 or contact via hospital
														switchboard (0161 922 6000)</p>

													<p><strong>Dr P F Unsworth </strong>0161 922 6500 or contact via
														hospital switchboard</p>

													<p>Monitor patient&rsquo;s wound at least weekly until healing
														achieved/ conservative plan set</p>

													<p><strong>Please Note:</strong></p>

													<p>Patient may need MRI to affected area if complex case/lack of
														clarity</p>
												</div>
											</div>
										</div>
										{/* <!--Treatment--> */}

										<div className="card">
											<div className="card-header" id="osteoTreatment">
												<h5 className="mb-0"><button aria-controls="collapseOsteoTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseOsteoTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="osteoTreatment" className="collapse"
												data-parent="#accordion1" id="collapseOsteoTreatment">
												<div className="card-body text-left">
													<p><strong><span style={{"color":"#0000AA"}}>Flucloxacillin 1g
																QDS</span></strong></p>

													<p><u><strong><span style={{"color":"#000000"}}>Penicillin
																	allergy</span></strong></u></p>

													<p><strong>
															<font color="#800080">Clindamycin 450mg QDS</font>
														</strong></p>

													<p>Typical treatment duration:</p>

													<p><span style={{"color":"#ff0000"}}>4 weeks for septic arthritis and 6
															weeks for osteomyelitis</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCBoneSection"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Upper Respiratory infections--> */}

	<div aria-hidden="true" className="portfolio-modal modal fade " id="PCURT" role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content">
			<button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="URTI">Upper
									Respiratory Tract Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<div id="acuteCoughtSection">
									{/* <!-- Portfolio Modal - Acute Cough--> */}
									<h4><a href="#acuteCough">Acute Cough</a></h4>

									<h4><a href="#acuteRhin">Acute Rhinosinusitis</a></h4>

									<h4><a href="#flu">Influenza</a></h4>

									<h4><a href="#otExt">Otitis Externa</a></h4>

									<h4><a href="#otMedia">Otitis Media</a></h4>

									<h4><a href="#pertussis">Pertussis (Whooping Cough)</a></h4>

									<h4><a href="#pharyngitis">Pharyngitis / Sore Throat / Tonsillitis</a></h4>

									<hr className="mt-2 mb-3" />
									<div className="text-left border border-info rounded">
										<h4 id="acuteCough">Acute Cough</h4>

										<h5 className="text-left">Be aware that an acute cough:</h5>

										<ul className="text-left ">
											<li>is usually self-limiting and gets better within 3 to 4 weeks without
												antibiotics</li>
											<li>is most commonly caused by a viral upper respiratory tract infection,
												such as a cold or flu</li>
											<li>can also be caused by acute bronchitis, a lower respiratory tract
												infection, which is usually a viral infection but can be bacterial</li>
											<li>can also have other infective or non-infective causes.</li>
										</ul>
										{/* <!--Accordian--> */}

										<div id="accordionAc">
											<div className="card">
												<div className="card-header" id="acManagement">
													<h5 className="mb-0"><button
															aria-controls="collapseAcuteCoughManagement"
															aria-expanded="false" className="btn btn-link collapsed"
															data-target="#collapseAcuteCoughManagement"
															data-toggle="collapse" type="button">Management</button>
													</h5>
												</div>

												<div aria-labelledby="acManagement" className="collapse"
													data-parent="#accordionAc" id="collapseAcuteCoughManagement">
													<div className="card-body text-left">
														<p>Be aware that some people may wish to try the following
															self-care treatments, which have limited evidence of some
															benefit for the relief of cough symptoms:</p>

														<ul>
															<li>honey (in people aged over 1 year)</li>
															<li>pelargonium (a herbal medicine; in people aged 12 and
																over)</li>
															<li>over-the-counter cough medicines containing the
																expectorant guaifenesin (in people aged 12 and over)
															</li>
															<li>over-the-counter cough medicines containing cough
																suppressants, except codeine, (in people aged 12 and
																over who do not have a persistent cough, such as in
																asthma, or excessive secretions).</li>
														</ul>
													</div>
												</div>
											</div>

											<div className="card">
												<div className="card-header" id="acTreatment">
													<h5 className="mb-0"><button aria-controls="collapseAcuteCoughTx"
															aria-expanded="false" className="btn btn-link collapsed"
															data-target="#collapseAcuteCoughTx" data-toggle="collapse"
															type="button">Treatment</button></h5>
												</div>

												<div aria-labelledby="acTreatment" className="collapse"
													data-parent="#accordionAc" id="collapseAcuteCoughTx">
													<div className="card-body text-left">
														<p>For people with an acute cough who are identified at a
															face-to-face clinical examination as systemically very
															unwell, offer an immediate antibiotic prescription </p>

														<p>Be aware that people with an acute cough may be at higher
															risk of complications if they:</p>

														<ul>
															<li>have a pre-existing comorbidity, such as significant
																heart, lung, renal, liver or neuromuscular disease,
																immunosuppression or cystic fibrosis</li>
															<li>are young children who were born prematurely</li>
															<li>are older than 65 years with 2 or more of the following
																criteria, or older than 80 years with 1 or more of the
																following criteria: － hospitalisation in previous year －
																type 1 or type 2 diabetes － history of congestive heart
																failure － current use of oral corticosteroids.</li>
														</ul>

														<p><span
																style={{"color":"#c0392b"}}><u><strong>Reassess</strong></u></span>
															people with an acute cough if their symptoms worsen rapidly
															or significantly, taking account of:</p>

														<ul>
															<li>alternative diagnoses, such as pneumonia</li>
															<li>any symptoms or signs suggesting a more serious illness
																or condition, such as cardiorespiratory failure or
																sepsis</li>
															<li>previous antibiotic use, which may have led to resistant
																bacteria.</li>
														</ul>

														<p><span style={{"color":"#0000AA"}}><strong>Doxycycline 200 mg on
																	first day, then 100 mg once a
																	day</strong></span> </p>

														<p><strong><span style={{"color":"#660099"}}>Amoxicillin 500mg - 1g
																	three times a day</span></strong> </p>

														<p><span style={{"color":"#66cc00"}}><strong>Clarithromycin 500 mg
																	twice a day</strong> </span></p>

														<p>Review at day 3 and do not exceed total duration of treatment
															by 5 days in total</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />

								{/* <!--Acute Rhinosinusitis--> */}
								<div className="text-left border border-info rounded" id="acuteRhinosSection">
									<hr className="mt-2 mb-3" />
									<h4 id="acuteRhin">Acute Rhinosinusitis</h4>

									<div className="text-left">
										<p><strong>Avoid antibiotics as 80% resolve in 14 days without, and they only
												offer marginal benefit after 7 days. </strong></p>

										<p>Reserve antibiotics for those with severe or persistent (10 days plus)
											symptoms. Steam inhalations will encourage drainage and can give relief. Use
											adequate analgesia. Consider delayed or immediate antibiotic when purulent
											nasal discharge.</p>
									</div>

									<div id="accordionRhinosinusitis">
										<div className="card">
											<div className="card-header" id="RhinoTreatment">
												<h5 className="mb-0"><button aria-controls="collapseRhinoTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseRhinoTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="RhinoTreatment" className="collapse"
												data-parent="#accordionRhinosinusitis" id="collapseRhinoTreatment">
												<div className="card-body text-left">
													<p><strong>Treatment for adults (for children see CBNF for doses)
														</strong></p>

													<p><span style={{"color":"#0000CD"}}><strong>Amoxicillin 500 mg
																TDS</strong> </span>for 5 days<span
															style={{"color":"#0000CD"}}> (<strong>1g if severe</strong>)
														</span></p>

													<p><span style={{"color":"#000000"}}><u><strong>Penicillin
																	allergy</strong></u></span></p>

													<p><span style={{"color":"#800080"}}><strong>Doxycycline 200 mg STAT then
																100 mg OD </strong></span>for 5 days in total.</p>

													<p>Doxycycline must <strong>NOT </strong>be prescribed for children
														under 12 years, or for pregnant or breast-feeding women.</p>

													<p>If failure to respond to the above first line antibiotics use</p>

													<p><span style={{"color":"#0000AA"}}><strong>Co-amoxiclav 625 mg
																TDS</strong> </span>for 5 days</p>

													<p><u><strong>Penicillin allergy</strong></u></p>

													<p><span style={{"color":"#800080"}}><strong>Clarithromcyin 500 mg
																BD</strong></span><span style={{"color":"#0000AA"}}>
														</span>for 5 days</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br></br>
								{/* <!--Influenza--> */}
								<div className="text-left border border-info rounded" id="influenzaSection">
									<hr className="mt-2 mb-3" />
									<h4 id="flu">Influenza</h4>

									<div className="text-left">
										<p>For further information on management of seasonal influenza please see <a
												href="https://cks.nice.org.uk/influenza-seasonal#!scenarioclarification"
												target="_blank" rel="noreferrer">NICE guidance</a></p>

										<p>Please note this service is provided by Public Health Laboratory Manchester
										</p>

										<p><strong><strong>Influenza diagnostic service for General Practice
												</strong></strong></p>

										<p><strong><strong>INTRODUCTION</strong></strong></p>

										<ul>
											<li>Public Health Laboratory Manchester provides a testing service for
												respiratory viral infections, including Influenza.</li>
											<li>Primary Care leads will be notified by email once the enhanced service
												is operational. This will be when Influenza is circulating, either
												nationally (by CMO notification) or locally, whichever is sooner.</li>
										</ul>

										<p><strong><strong>SAMPLES</strong></strong></p>

										<ul>
											<li>If patients are producing sputum, please collect a sample in sputum pot.
											</li>
											<li>For patients who are not producing sputum: Please send nose and throat
												swabs, combined in a single vial of virus transport medium (VTM). Please
												use one flocked swab to swab the nose and another one to swab the throat
												and then place both in a single vial of VTM.</li>
											<li>If virus transport medium is not available, specimens can be taken using
												dry cotton or Dacron-tipped swabs but they should <strong><strong>not
													</strong></strong>be sent in charcoal transport medium.</li>
										</ul>

										<p><strong><strong>REQUESTS</strong></strong></p>

										<ul>
											<li>Respiratory virus testing, including Influenza can be requested on GP
												ICE.</li>
										</ul>

										<p><strong><strong>RESULTS </strong></strong></p>

										<ul>
											<li>Between Monday and Friday routine respiratory virus results will
												generally be available within 24 hours of receipt in the laboratory.
												Results for samples received after 09.00 on Saturday or during Sunday
												will be available on the following Monday.</li>
											<li>Positive results will be telephoned to the requesting location during
												the following hours: 08.30-17.00 Monday to Friday and 08.30 to 12.30 on
												Saturday.</li>
											<li>A dedicated mobile phone number (07973 870099) will be available (08:30
												to 17:00 seven days a week) for chasing urgent results.</li>
										</ul>

										<p><strong><strong>ADDITIONAL CONTACT DETAILS</strong></strong></p>

										<ul>
											<li>For further information during normal working hours (Mon-Fri 9am-5pm and
												Saturday 09.00-12.30) please contact the laboratory (0161 2768854 Option
												1).</li>
											<li>Outside of normal working hours the duty consultant virologist can be
												contacted for urgent clinical and operational advice via the hospital
												switchboard (01612761234).</li>
										</ul>
									</div>
									{/* <!--Accordion--> */}

									<div id="accordionFlu">
										<div className="card-header" id="fluPrevention">
											<h5 className="mb-0"><button aria-controls="collapseFluPrevention"
													aria-expanded="false" className="btn btn-link collapsed"
													data-target="#collapseFluPrevention" data-toggle="collapse"
													type="button">Prevention</button></h5>
										</div>

										<div aria-labelledby="fluPrevention" className="collapse"
											data-parent="#accordionFlu" id="collapseFluPrevention">
											<div className="card-body text-left">
												<p>The current Department of Health advice should be followed.</p>

												<p>Annual vaccination is essential for all those at risk of influenza.
												</p>
											</div>
										</div>

										<div className="card-header" id="fluTreatment">
											<h5 className="mb-0"><button aria-controls="collapseFluTx" aria-expanded="false"
													className="btn btn-link collapsed" data-target="#collapseFluTx"
													data-toggle="collapse">Treatment</button></h5>
										</div>

										<div aria-labelledby="fluTreatment" className="collapse" data-parent="#accordionFlu"
											id="collapseFluTx">
											<div className="card-body text-left">
												<p>Treatment is recommended when all of the following apply:</p>

												<ul>
													<li>Influenza is known to be circulating in the community (indicated
														by national surveillance schemes).</li>
													<li>The patient is in an &lsquo;at-risk&rsquo; group.</li>
													<li>The patient presents with influenza-like illness and can begin
														treatment within 48 hours of the onset of symptoms.</li>
												</ul>

												<p><span style={{"color":"#0000AA"}}><strong>Oseltamivir 75mg BD for 5
															days</strong></span></p>

												<p><strong>or</strong></p>

												<p><strong><span style={{"color":"#800080"}}>Zanamivir 10 mg (2 inhalations
															via diskhaler) BD for 5 days </span></strong>(caution in
													asthma and COPD; there is a risk of bronchospasm so a short- acting
													bronchodilator should be available).</p>
											</div>
										</div>

										<div className="card-header" id="fluProphylaxis">
											<h5 className="mb-0"><button aria-controls="collapseFluProphylaxis"
													aria-expanded="false" className="btn btn-link collapsed"
													data-target="#collapseFluProphylaxis" data-toggle="collapse"
													type="button">Prophylaxis</button></h5>
										</div>

										<div aria-labelledby="fluProphylaxis" className="collapse"
											data-parent="#accordionFlu" id="collapseFluProphylaxis">
											<div className="card-body text-left">
												<ul>
													<li><span style={{"color":"#000000"}}>Prophylaxis is normally not
															considered in at-risk groups who have been vaccinated
															against seasonal influenza at least 14 days before
															exposure. </span></li>
													<li><span style={{"color":"#000000"}}>Prescribe an antiviral drug for
															post-exposure prophylaxis if all of the following
															circumstances apply: </span>
														<ul>
															<li><span style={{"color":"#000000"}}>The national surveillance
																	scheme indicates that influenza is
																	circulating.</span></li>
															<li><span style={{"color":"#000000"}}>The person has been exposed
																	to a person (in the same household or residential
																	setting) with an influenza-like illness.</span>
															</li>
															<li><span style={{"color":"#000000"}}>The person is in an &#39;at
																	risk&#39; group </span> <span
																	style={{"color":"#000000"}}>(see below for more
																	information) and has not been adequately
																	protected by vaccination, that is:</span>
																<ul>
																	<li><span style={{"color":"#000000"}}>They have not been
																			vaccinated since the previous influenza
																			season.</span></li>
																	<li><span style={{"color":"#000000"}}>The vaccination is
																			not well matched to the circulating
																			strain.</span></li>
																	<li><span style={{"color":"#000000"}}>There has been less
																			than 14 days between vaccination and date of
																			contact with influenza.</span></li>
																</ul>
															</li>
															<li><span style={{"color":"#000000"}}>The person is able to start
																	treatment within 48 hours of this contact (for
																	oseltamivir) or 36 hours of this contact (for
																	zanamivir).</span>
																<ul>
																	<li><span style={{"color":"#000000"}}>Treatment after
																			48 hours of this contact (for
																			oseltamivir) or 36 hours of this
																			contact (for zanamivir) is an off-label use
																			and should be done on specialist advice
																			only.</span></li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>

												<p><span style={{"color":"#000000"}}>Prophylaxis is also recommended for
														residents in chronic care establishments (regardless of
														influenza vaccination) using oseltamivir within 48 hours of
														influenza-like illness being present in the
														establishment.</span></p>

												<p><span style={{"color":"#0000AA"}}><strong>Oseltamivir 75mg OD for 10
															days</strong></span><span style={{"color":"#000000"}}> (within 48
														hours of contact)</span></p>

												<p><span style={{"color":"#000000"}}><strong>or</strong></span></p>

												<p><span style={{"color":"#990099"}}><strong>Zanamivir 10mg (via diskhaler) OD
															for 10 days</strong></span><span style={{"color":"#000000"}}>
														(within 36 hours of contact)</span></p>
											</div>
										</div>

										<div className="card-header" id="fluRisk">
											<h5 className="mb-0"><button aria-controls="collapseFluRisk"
													aria-expanded="false" className="btn btn-link collapsed"
													data-target="#collapseFluRisk" data-toggle="collapse"
													type="button">At Risk Groups</button></h5>
										</div>

										<div aria-labelledby="fluRisk" className="collapse" data-parent="#accordionFlu"
											id="collapseFluRisk">
											<div className="card-body text-left">
												<ul>
													<li><strong>Chronic respiratory disease</strong>, including:

														<ul>
															<li>Chronic obstructive pulmonary disease, including chronic
																bronchitis and emphysema, bronchiectasis, cystic
																fibrosis, interstitial lung fibrosis, pneumoconiosis,
																and bronchopulmonary dysplasia.</li>
															<li>Asthma that requires continuous or repeated use of
																inhaled corticosteroids or with previous exacerbations
																requiring hospital admission.</li>
															<li>Children who have previously been admitted to hospital
																for lower respiratory tract disease.</li>
														</ul>
													</li>
													<li><strong>Chronic heart disease</strong>, including congenital
														heart disease, hypertension with cardiac complications, chronic
														heart failure, and individuals requiring regular medication or
														follow up for ischaemic heart disease.</li>
													<li><strong>Chronic kidney disease</strong>, including nephrotic
														syndrome, chronic renal failure, and renal transplantation.</li>
													<li><strong>Chronic liver disease</strong>, including cirrhosis,
														biliary atresia, and chronic hepatitis.</li>
													<li><strong>Chronic neurological disease</strong>, including stroke
														and transient ischaemic attack.</li>
													<li><strong>Diabetes</strong>, including type 1 diabetes and
														type 2 diabetes (requiring oral hypoglycaemic drugs or a
														controlled diet).</li>
													<li><strong>Immunosuppression</strong> due to disease or
														treatment, including:
														<ul>
															<li>People undergoing chemotherapy (or radiotherapy) leading
																to immunosuppression.</li>
															<li>People with asplenia or splenic dysfunction.</li>
															<li>HIV infection (all stages).</li>
															<li>Individuals treated with, or likely to be treated with,
																systemic steroids for more than 1 month at dosages
																equivalent to 20 mg prednisolone daily (at any age)
																or, for children weighing less than 20 kg, a dose
																of 1 mg or more per kg body weight per day.</li>
														</ul>
													</li>
													<li><strong>Morbid obesity (body mass index of 40 or more).</strong>
													</li>
												</ul>

												<p><strong>Consideration should also be given to:</strong></p>

												<ul>
													<li>People living in long-stay residential or nursing homes.</li>
													<li>People who receive a carer&rsquo;s allowance or care for
														disabled or elderley people, whose welfare may be at risk if the
														carer falls ill.</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Pertussis--> */}
								<div className="text-left border border-info rounded" id="pertussisSection">
									<hr className="mt-2 mb-3" />
									<h4 id="pertussis">Pertussis (Whooping Cough)</h4>

									<div className="text-left">
										<p>There is increased pertussis activity in England and it is advised that the
											following actions should be taken:</p>

										<ul>
											<li>Immunise: all infants must be immunised at the correct time to ensure
												they are protected as early as possible and prevent spread to vulnerable
												infants.</li>
											<li>Notify: suspected cases must be reported to PHE North West on 0344 225
												0562.</li>
											<li>Treat: follow treatment recommendations by the PHE at: <a
													href="https://www.gov.uk/government/collections/pertussis-guidance-data-and-analysis"
													target="_blank" rel="noreferrer">https://www.gov.uk/government/collections/pertussis-guidance-data-and-analysis</a>
											</li>
											<li>Test: the specimen taken will depend on the time of presentation. For
												patients presenting within 14 days of onset of cough, take a per nasal
												swab.  For patients presenting after 14 days of onset of cough,
												take blood for serology.</li>
										</ul>

										<p>Please can the following form also be completed and faxed or emailed to PHE
										</p>

										<p><a href="https://www.gov.uk/government/publications/notifiable-diseases-form-for-registered-medical-practitioners"
												target="_blank" rel="noreferrer">Registered medical practitioner notification form</a>
										</p>
									</div>
								</div>
								<br></br>
								{/* <!--Pharyngitis--> */}

								<div className="text-left border border-info rounded" id="pharyngitisSection">
									<hr className="mt-2 mb-3" />
									<h4 id="pharyngitis">Pharyngitis / Sore Throat / Tonsillitis</h4>

									<div className="text-left">
										<p><strong>Avoid antibiotics </strong>as 90% resolve in 7 days without, and
											pain only reduced by 16 hours.</p>

										<p>Use<strong> <a href="https://ctu1.phc.ox.ac.uk/feverpain/index.php"
													target="_blank" rel="noreferrer">FeverPAIN</a> Score: </strong></p>

										<p>Fever in last 24h, Purulence, Attend rapidly under 3d, severely Inflamed
											tonsils, No cough or coryza</p>

										<p><strong>Score 0-1</strong>: 13-18% streptococci, use NO antibiotic strategy;
										</p>

										<p><strong>2-3: </strong>34-40% streptococci, use 3 day back-up antibiotic;</p>

										<p><strong>&gt;4:</strong> 62-65% streptococci, use immediate antibiotic if
											severe,  or 48hr short back-up prescription</p>

										<p>A positive throat swab culture growing Streptococcus Group A, together with
											clinical features of acute pharyngotonsillitis almost certainly indicates
											infection. </p>

										<p>If you have taken a throat swab before prescribing antibiotics and it is
											reported negative for Streptococcus Group A do not prescribe
											antibiotics, and if antibiotics have already been commenced, discontinue
											them.</p>

										<p>Streptococcus A throat swab POC testing can be a rapid way to determine
											bacterial vs viral sore throat and consideration should be given to this
											method of testing especially in the urgent care or walk-in setting.</p>
									</div>
									<br />
									{/* <!--Treatment--> */}
									<div id="accordionPharyngitis">
										<div className="card">
											<div className="card-header" id="pharyngitisTreatment">
												<h5 className="mb-0"><button aria-controls="collapsePharyngitisTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapsePharyngitisTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="pharyngitisTreatment" className="collapse"
												data-parent="#accordionPharyngitis" id="collapsePharyngitisTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Phenoxymethylpenicillin 500mg
																QDS</strong></span> or <span
															style={{"color":"#0000AA"}}><strong>1g BD (QDS) when
																severe</strong></span> for 5 days.  (10 days
														for scarlet fever).</p>

													<p><u><span style={{"color":"#000000"}}><strong>Penicillin
																	allergy</strong></span></u></p>

													<p><span style={{"color":"#800080"}}><strong>Clarithromycin 500mg
																BD</strong></span> for 5 days. (10 days for scarlet
														fever).</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Otitis Media--> */}
								<div className="text-left border border-info rounded" id="OtMediaSection">
									<hr className="mt-2 mb-3" />
									<h4 id="otMedia">Otitis Media</h4>

									<div className="text-left">
										<p><span style={{"color":"#000000"}}><strong>Many cases are viral and otitis media
													resolves in 60% of cases without antibiotics within 24
													hours</strong></span>. You need to treat 15 children aged over 2
											years to get pain relief in one child, at 2 days. A poor outcome is unlikely
											if there is no vomiting and the temperature is below 38.5&ordm;C. Recent
											evidence suggests that antibiotics seem to be most beneficial in children
											younger than 2 years of age with bilateral acute otitis media, and in
											children with both acute otitis media and otorrhoea.</p>

										<p><u>Non-antimicrobial treatments</u></p>

										<p>Offer regular doses of paracetamol or ibuprofen for pain.  Use the right
											dose for the age or weight of the child at the right time, and use maximum
											doses for severe pain</p>

										<p>Consider eardrops containing an anaesthetic and an analgesic for pain if an
											immediate antibiotic is not given, and there is no eardrum perforation or
											otorrhoea decongestants or antihistamines</p>

										<p>Evidence on antibiotics Antibiotics make little difference to the number of
											children whose symptoms improve</p>

										<p>Antibiotics make little difference to the number of children with recurrent
											infections, short-term hearing loss or perforated eardrum</p>

										<p>Complications (such as mastoiditis) are rare with or without
											antibiotics.  Possible adverse effects include diarrhoea and
											nausea.</p>

										<p> Groups who may be more likely to benefit from antibiotics</p>

										<p>&bull; Children and young people with acute otitis media and otorrhoea
											(discharge following eardrum perforation) Children under 2 years with acute
											otitis media in both ears</p>

										<p>2-3 days treatment may be sufficient so parents can stop the antibiotics
											before the end of the course if their child has recovered.</p>
									</div>

									<div id="accordionOtMedia">
										<div className="card">
											<div className="card-header" id="OtMediaTreatment">
												<h5 className="mb-0"><button aria-controls="collapseOtMediaTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseOtMediaTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="OtMediaTreatment" className="collapse"
												data-parent="#accordionOtMedia" id="collapseOtMediaTreatment">
												<div className="card-body text-left">
													<p>First line treatment should be with:</p>

													<p>Eardrops containing an anaesthetic and an analgesic</p>

													<p><b>Phenazone 40 mg/g with lidocaine 10 mg/g
														</b><span>(Otigo)</span></p>

													<p>Apply 4 drops two or three times a day for up to 7 days. 
														Use only if an immediate oral antibiotic prescription is not
														given, and there is no eardrum perforation or otorrhoea</p>

													<p>Treatment for adults (for children see BNF for doses)</p>

													<p><span style={{"color":"#0000AA"}}><strong>Amoxicillin 500mg
																TDS</strong></span> for 5 days or <span
															style={{"color":"#0000AA"}}><strong>1g TDS</strong></span> for 3
														days</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong></span></p>

													<p><span style={{"color":"#800080"}}><strong>Clarithromycin 500mg
																BD</strong></span> for 5 days</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Otitis Externa--> */}
								<div className="text-left border border-info rounded" id="OtExternaSection">
									<hr className="mt-2 mb-3" />
									<h4 id="otExt">Otitis Externa</h4>

									<div className="text-left">
										<p>First use aural toilet and analgesics.</p>

										<p>Cure rates are similar at 7 days for topical acetic acid or antibiotic +/-
											steroid.</p>

										<p>First line:<span style={{"color":"rgb(0,0,255)"}}> <strong>Acetic acid
													2%</strong> </span>(e.g. Earcalm available over the counter)<span
												style={{"color":"rgb(0,0,255)"}}> <strong>1 spray TDS</strong></span> 7 days
										</p>

										<p>Second line: <span style={{"color":"rgb(0,0,255)"}}><strong>Neomycin sulphate
													with corticosteroid </strong>(e.g. Otomize ear spray, 1 puff TDS or
												Betnesol N ear drops 3 drops TDS) 7 days min to 14 days max.</span></p>

										<p>Advise patient to apply tragal pressure to help remove the debris.</p>

										<p><span style={{"color":"#ff0000"}}><strong>AVOID IF PERFORATED TYMPANIC MEMBRANE.
												</strong></span></p>

										<p>If cellulitis or disease extending outside the ear canal, start oral
											antibiotics and refer.</p>
									</div>
								</div>
								<br />
								
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#URTI"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- UTI section--> */}

	<div aria-hidden="true" aria-labelledby="UrinaryTractLabel" className="portfolio-modal modal fade " id="PCUTI"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="UrinaryTractLabel">Urinary Tract Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4 id="PCUrine"><a href="#acutePyelonephritis">Acute Pyelonephritis</a></h4>

								<h4><a href="#bacterialProstatitis">Bacterial Prostatitis</a></h4>

								<h4><a href="#catheterUTI">Catheter-associated UTI</a></h4>

								<h4><a href="#recurrentUTI">Recurrent UTI</a></h4>

								<h4><a href="#PCuncomplicatedFemales">Uncomplicated UTI in Females</a></h4>

								<h4><a href="#childrenUTI">UTI in Children</a></h4>

								<h4><a href="#maleUTI">UTI in Males</a></h4>

								<h4><a href="#pregnancyUTI">UTI in pregnancy</a></h4>
								<br />
								{/* <!--Acute pyelonephritis--> */}
								<div className="text-left border border-info rounded" id="pyelonephritisSection">
									<h2 className="text-center" id="acutePyelonephritis">Acute Pyelonephritis</h2>

									<p>Pyelonephritis is inflammation of the kidney which usually results from bacterial
										infection. It is important to differentiate pyelonephritis (upper urinary tract
										infection) from cystitis (lower urinary tract infection) in order to treat the
										patient appropriately. Pyelonephritis triggers a systemic response and symptoms
										include: fever, rigors, flank pain, nausea, vomiting and costovertebral angle
										tenderness, whereas symptoms of cystitis are more localised to the area of
										infection i.e. the bladder and include dysuria, urinary bladder frequency and
										urgency,and suprapubic pain.</p>
									{/* <!--Start accordian--> */}

									<div id="accordionAcutePye">
										<div className="card">
											<div className="card-header" id="acutePyeTreatment">
												<h5 className="mb-0"><button aria-controls="collapseAcutePyeTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseAcutePyeTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="acutePyeTreatment" className="collapse"
												data-parent="#accordionAcutePye" id="collapseAcutePyeTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Cefalexin
																1g TDS</strong></span> for 10 days.</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong></span></p>

													<p><strong><span style={{"color":"#800080"}}>Ciprofloxacin 500mg
																BD</span></strong> for 7 days.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Bacterial Prostatitis--> */}
								<div className="text-left border border-info rounded" id="prostatitisSection">
									<h2 className="text-center" id="bacterialProstatitis">Bacterial Prostatitis</h2>

									<p>Send a MSU off for culture and prescribe empiric antibiotics. Review antibiotic
										therapy when sensitivity results come back (refer to urologist).</p>
									{/* <!--Start accordian--> */}

									<div id="accordionProstatitis">
										<div className="card">
											<div className="card-header" id="prostatitisTreatment">
												<h5 className="mb-0"><button aria-controls="collapseProstatitisTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseProstatitisTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="prostatitisTreatment" className="collapse"
												data-parent="#accordionProstatitis" id="collapseProstatitisTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#000000"}}><strong>1st
																line:</strong></span><span
															style={{"color":"#800080"}}><strong> </strong></span><strong><span
																style={{"color":"#0000AA"}}>Co-trimoxazole 960mg
																BD</span></strong><span style={{"color":"#3333cc"}}>
														</span>for 14 days.</p>

													<p><span style={{"color":"#000000"}}><strong>2nd
																line:</strong></span><span
															style={{"color":"#0000AA"}}><strong> </strong></span><span
															style={{"color":"#8e44bd"}}><strong>Ciprofloxacin 500mg
																BD</strong> </span>for 14 days.</p>

													<p><span style={{"color":"#000000"}}><strong>3rd
																line:</strong></span><span
															style={{"color":"#0000AA"}}><strong> </strong></span><span
															style={{"color":"#e74c3a"}}><strong>Doxycycline
																100mg BD</strong> </span>for 14 days.</p>

													<p>In sexually active young men consider a diagnosis of Chlamydia
														trachomatis or gonorrhoea. Refer all men for investigation by a
														specialist after recovery to exclude a structural cause.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Catheter-associated UTI--> */}
								<div className="text-left border border-info rounded" id="cathUTISection">
									<h2 className="text-center" id="catheterUTI">Catheter-associated UTI</h2>

									<ul>
										<li>Catheter-associated UTI occurs when bacteria in a catheter bypass the
											body&#39;s defence mechanisms and enter the bladder.</li>
										<li>The longer a catheter has been in place the more likely bacteria will be
											found in the urine</li>
										<li>Treatment is only needed for
											<u><strong>symptomatic</strong></u> catheter-associated UTI (apart from
											in pregnancy)</li>
										<li>Removing or changing the catheter (especially if it has been in place for
											longer than 7 days) should be strongly considered.</li>
										<li>Catheters should be reviewed and removed rather than changed if
											possible</li>
									</ul>

									<div id="accordionCatheterUTI">
										<div className="card">
											<div className="card-header" id="catheterUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapseCatheterUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseCatheterUTITreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="catheterUTITreatment" className="collapse"
												data-parent="#accordionCatheterUTI" id="collapseCatheterUTITreatment">
												<div className="card-body text-left">
													<p><span style={{"backgroundColor":"white"}}><strong>This is not
																routinely required for every patient</strong>. 
															However, for those patients that are truly symptomatic of a
															UTI and require a catheter change (rather than just
															removal) <strong>and</strong> there is concern
															regarding introduction of bacteria during the change
															(due to previous medical history or traumatic catheter
															change), then antibiotics can be given to reduce the
															incidence of bacteraemia.</span></p>

													<p><span style={{"backgroundColor":"white"}}>Any antibiotic therapy for
															these patients should be based on previous known urine
															sensitivities and ideally a specimen be sent for
															urinalysis <strong><u>BEFORE</u></strong> any
															antibiotic therapy is started for resolution of the
															UTI.</span></p>

													<p><span style={{"backgroundColor":"white"}}>Urine specimens
															should <strong><u>ALWAYS</u></strong> be taken
															from the sampling port and <u>NOT</u> the catheter
															bag. Refer to the <u>Trust Urinary catheterisation and
																catheter care management adults policy</u> for guidance
															on best practice.</span></p>

													<p><span style={{"backgroundColor":"white"}}><a data-dismiss="modal"
																data-target="#HCProphSurg" data-toggle="modal"
																href="#HCSurgUrinCatheter">Urinary catheterisation
																prophylaxis </a>  for those patients with
															urethritis, where Staph aureus has been isolated, and
															require a catheter change.</span></p>

													<p><span style={{"backgroundColor":"white"}}>For further advice on
															individual patients contact Urology Specialist Nurses 0161
															922 6696, Infection Prevention Nurses on 0161 922 6194 or
															the Consultant Microbiologist on 0161 922 4086 /
															6500.</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Recurrent UTI--> */}
								<div className="text-left border border-info rounded" id="recurrentUTISection">
									<h2 className="text-center" id="recurrentUTI">Recurrent UTI</h2>

									<p>Recurrent urinary tract infection (UTI) in adults is defined as repeated UTI with
										frequency of 2 or more UTIs in the last 6 months or 3 or more UTIs in the last
										12 months.</p>

									<p>Comprehensively assess the problem and refer to a specialist urologist or
										gynaecologist (for female patients).</p>

									<p><strong>Behavioural and personal hygiene measures:</strong></p>

									<p>Patients <span style={{"color":"#282828"}}><span style={{"color":"#282828"}}><span
													style={{"color":"#282828"}}><span style={{"color":"#282828"}}>should be given
														advice about behavioural and personal <span
															style={{"color":"#282828"}}><span style={{"color":"#282828"}}>hygiene
																measures to reduce the risk of UTI, such
																as:</span></span></span></span></span></span></p>

									<p><span style={{"color":"#282828"}}><span style={{"color":"#282828"}}>- drinking enough fluids
												to avoid dehydration</span></span></p>

									<p><span style={{"color":"#282828"}}><span style={{"color":"#282828"}}>- </span></span><span
											style={{"color":"#282828"}}><span style={{"color":"#282828"}}>not delaying habitual and
												post-coital urination</span></span></p>

									<p><span style={{"color":"#282828"}}><span style={{"color":"#282828"}}>- wiping from front to
												back after defaecation</span></span></p>

									<p><span style={{"color":"#282828"}}><span style={{"color":"#282828"}}>- not douching or wearing
												occlusive underwear.</span></span></p>

									<p><strong><span style={{"color":"#000000"}}>Cranberry products and
												D-mannose:</span></strong></p>

									<p><span style={{"color":"#58595b"}}>Some women find these effective, but there is
											currently poor evidence to support this and patients should be warned about
											the sugar content of these products if relevant.  Cranberry products
											should be avoided by patients on warfarin.</span></p>

									<div id="accordionRecurrentUTI">
										<div className="card">
											<div className="card-header" id="recurrentUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapseRecurrentUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseRecurrentUTITreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="catheterUTITreatment" className="collapse"
												data-parent="#accordionRecurrentUTI" id="collapseRecurrentUTITreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#000000"}}><strong>Antibiotic
																treatment:</strong></span></p>

													<p>If behavioural and personal hygiene measures do not reduce
														incidence of UTI, antibiotic treatment may be considered from
														one of the following recommendations below:</p>

													<ul>
														<li>Each episode of UTI may be treated by a healthcare
															professional as it occurs.</li>
														<li>Patient/carer initiated antibiotic treatment is a
															cost-effective and safer alternative (in terms of avoiding
															the development of CDI and antibiotic resistance) compared
															to continuous antibiotic prophylaxis. 
															This entails self-administration of single high-dose
															antibiotic treatment; however, if symptoms persist,
															treatment could continue for up to 3 days, but often 1 or 2
															days are sufficient.  This should be considered in
															patients who are compos mentis and are capable of
															recognising the symptoms of UTI. The patient should be
															counselled on how and when to self-treat.  Antibiotics
															should be reviewed every 6 months.</li>
														<li>Antibiotic prophylaxis with either trimethoprim 100mg or
															nitrofurantoin 50mg nocte (provided there is sensitivity to
															these antibiotics) may be considered where it may be
															impractical for patients or carers to initiate antibiotics
															appropriately however antibiotics must be reviewed at least
															every 6 months.  The patient should be counselled on
															adverse effects and the risk of antibiotic
															resistance developing.</li>
														<li>If related to sexual intercourse consider a single dose of
															antibiotic post coital (off-label use).  Trimethoprim
															200mg or nitrofurantoin 100mg stat may be
															given after taking into account sensitivity
															results.  Antibiotics should be reviewed every 6
															months.</li>
													</ul>

													<p>For patients who develop and continue to have symptoms of UTI
														whilst taking antibiotic prophylaxis or treating a UTI, they
														should be advised to seek medical help.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br></br>
								{/* <!--Uncomplicated Female UTI--> */}
								<div className="text-left border border-info rounded" id="PCuncomplicatedFemales">
									<h2 className="text-center" id="femaleUTI">Uncomplicated UTI in Females</h2>

									<p>If there is fever, flank or back pain then it is likely to be an upper UTI and
										antibiotic treatment for 7 - 14 days is needed, (see pyelonephritis section).
									</p>

									<p>If symptoms are mild the woman may wish to consider not taking antibiotics and
										simply increase her fluid intake as UTIs often resolve spontaneously in a few
										days.</p>

									<p>If the woman has more than 3 typical symptoms of a UTI, and no vaginal discharge,
										then treat empirically with antibiotics as below.</p>

									<p>If the woman has 2 or less, or mild symptoms, obtain a urine sample. If the urine
										is NOT cloudy this gives a 97% negative predictive value, so do not treat unless
										other risk factors of infection are present.</p>

									<p>If urine is cloudy then perform a urine dipstick test containing nitrite and
										leucocyte esterase impregnated reagent. If the results are negative for
										leucocytes and nitrites then there is a 95% negative predictive value. If both
										are positive, or nitrite or leucocyte esterase are positive, then treat. 
										However, if only leucocytes are positive only treat if symptoms are severe and
										send urine for culture.</p>

									<p>DO NOT PERFORM URINE DIPSTICK TESTS IN THOSE OVER THE AGE OF 65 YEARS</p>

									<div id="accordionFemaleUTI">
										<div className="card">
											<div className="card-header" id="femaleUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapseFemaleUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseFemaleUTITreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="femaleUTITreatment" className="collapse"
												data-parent="#accordionFemaleUTI" id="collapseFemaleUTITreatment">
												<div className="card-body text-left">
													<p><strong><span style={{"color":"#0000AA"}}>Nitrofurantoin 100mg MR
																BD</span></strong> for 3 days (nitrofurantoin 50mg
														QDS may be an alternative if supply issues with MR
														preparations).</p>

													<p>Nitrofurantoin is contraindicated in patients with an eGFR of
														&le;45ml/min; however it maybe used with caution in patients
														with eGFR 30-44ml/min provided the duration of treatment does
														not exceed 7 days</p>

													<p>OR</p>

													<p><span style={{"color":"#800080"}}><strong>Pivmecillinam 400mg STAT then
																200mg TDS</strong></span> for 3 days <strong>(this is a
															penicillin)</strong></p>

													<p>If the above two options are not suitable for patients then
														please use MSU results to guide treatment or discuss with
														Microbiologist on 0161 922 4086/6500 or mobile via switch 0161
														922 6000</p>

													<p>If a patient is penicillin allergic (anaphylaxis) and has poor
														renal function whereby other antibiotic options can&#39;t be
														used then<span
															style={{"color":"#00ff00"}}><strong> </strong></span><span
															style={{"color":"#008000"}}><strong>Fosfomycin (prescribe as
																<em>Monuril</em>) 3g STAT once only</strong></span> can
														be given.</p>
												</div>
											</div>

											<div className="card-header" id="femaleUTIResistence">
												<h5 className="mb-0"><button aria-controls="collapseFemaleUTIResistence"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseFemaleUTIResistence"
														data-toggle="collapse" type="button">Resistance within our
														population</button></h5>
											</div>

											<div aria-labelledby="femaleUTIResistence" className="collapse"
												data-parent="#accordionFemaleUTI" id="collapseFemaleUTIResistence">
												<div className="card-body text-left">
													<p>We have high levels of resistance (50%) to co-amoxiclav of E
														coli.  Pivecillinam has shown to be effective against E
														coli and is also a recommended choice in the PHE guidelines. The
														resistance to this drug is low in our local population at 16%.
														Cephalosporins have high sensitivity rates in Tameside.</p>

													<p>Extended - spectrum Beta-lactamase enzymes (ESBLs) in
														gram-negative bacilli such as E. coli are increasing, and these
														ESBL-producing E. coli are multi-resistant but remain sensitive
														to nitrofurantoin. Consider a diagnosis of Chlamydia trachomatis
														in sexually active young women (in which case urine or
														endocervical specimens should be submitted for Chlamydia PCR
														assay).</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--UTI Children--> */}
								<div className="text-left border border-info rounded" id="childrenUTISection">
									<h2 className="text-center" id="childrenUTI">UTI in Children</h2>

									<p>Send a MSU for culture and rule out or manage associated conditions (e.g.
										constipation, urinary tract obstruction). In a child over 60 days old with mild
										symptoms or another possible cause a urine dipstick test can be performed. If
										negative for nitrites and leucocyte esterase, antibiotics can be delayed until
										culture results become available. With moderate symptoms start antibiotics and
										review treatment when the culture results are back.</p>

									<p>NICE guidelines also state that the locally agreed choices should be followed.
									</p>
									{/* <!--Start accordian--> */}

									<div id="accordionChildrenUTI">
										<div className="card">
											<div className="card-header" id="childrenUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapseChildrenUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseChildrenUTITreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="childrenUTITreatment" className="collapse"
												data-parent="#accordionChildrenUTI" id="collapseChildrenUTITreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Trimethoprim
															</strong></span>dosed as in cBNF for 3 days</p>

													<p>An alternative antibiotic should be used if the child is already
														on trimethoprim prophylaxis (in which case the trimethoprim
														should be stopped), has had it in the last 3months, or has had
														previous infections resistant to it e.g.</p>

													<p><span style={{"color":"#800080"}}><strong>Cefalexin</strong></span>
														dosed as in cBNF for 3 days</p>

													<p><span style={{"color":"#000000"}}><u><strong>Penicillin
																	allergy</strong></u></span></p>

													<p><span
															style={{"color":"#b22222"}}><strong>Nitrofurantoin</strong></span>
														dosed as in c BNF for 3 days</p>

													<p>For children who are 3 months or older and have cystitis or lower
														UTI NICE guidance CG54 suggests 3 days treatment for lower UTI.
														However if the child is still unwell after 24 - 48 hours,
														therapy needs reviewing and if there is no alternative
														diagnosis, send urine for culture.</p>

													<p>For children who are under 3 months or children with upper
														UTI/pyelonephritis refer immediately to a paediatric specialist.
													</p>

													<p>Infants and children with recurrent UTIs should be referred for
														assessment by a paediatric specialist.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--UTI Males--> */}
								<div className="text-left border border-info rounded" id="maleUTISection">
									<h2 className="text-center" id="maleUTI">UTI in Males</h2>

									<p>Always send a MSU off to the lab for culture. Consider a diagnosis of prostatitis
										and refer if necessary. In sexually active young men with urinary symptoms
										consider Chlamydia trachomatis and other sexually transmitted infections.</p>

									<p>DO NOT PERFORM URINE DIPSTICK TESTS IN THOSE OVER THE AGE OF 65 YEARS</p>
									{/* <!--Start accordian--> */}

									<div id="accordionMaleUTI">
										<div className="card">
											<div className="card-header" id="maleUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapseMaleUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapseMaleUTITreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="maleUTITreatment" className="collapse"
												data-parent="#accordionMaleUTI" id="collapseMaleUTITreatment">
												<div className="card-body text-left">
													<p>1st choice:<strong> <span style={{"color":"#3300ff"}}>Pivmecillinam
																400mg STAT</span> </strong>for the first dose
														followed by<strong><span style={{"color":"#3300ff"}}> 200mg
																TDS</span> </strong>thereafter for 7
														days<strong>.</strong></p>

													<p>2nd choice:<span style={{"color":"#8e44bd"}}><strong> Nitrofurantoin
																100mg MR BD</strong></span> for 7 days
														(nitrofurantoin 50mg QDS may be an alternative if supply issues
														with MR preparations)</p>

													<p>Nitrofurantoin is contraindicated in patients with an eGFR of
														&le;45ml/min however it may be used with caution in patients
														with eGFR 30-44ml/min provided the duration of treatment does
														not exceed 7 days.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Pregnancy UTI--> */}
								<div className="text-left border border-info rounded" id="pregnancyUTISection">
									<h2 className="text-center" id="pregnancyUTI">UTI in Pregnancy</h2>

									<p>A MSU (mid stream urine sample) should be sent off for culture at the first
										antenatal visit, as asymptomatic bacteriuria can be associated with
										pyelonephritis and premature delivery. If the patient presents with signs of a
										UTI send off a MSU for culture.</p>

									<p>Treat empirically until sensitivity data comes back. Repeat the MSU 7 days after
										treatment has been completed to ensure the infection has been eradicate.</p>
									{/* <!--Start accordian--> */}

									<div id="accordionPregnancyUTI">
										<div className="card">
											<div className="card-header" id="pregnancyUTITreatment">
												<h5 className="mb-0"><button aria-controls="collapsePregnancyUTITreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapsePregnancyUTITreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="pregnancyUTITreatment" className="collapse"
												data-parent="#accordionPregnancyUTI" id="collapsePregnancyUTITreatment">
												<div className="card-body text-left">
													<p><u><strong>ORAL TREATMENT:</strong></u></p>

													<p><strong>1st line:</strong> <strong><span
																style={{"color":"#2980b9"}}>Nitrofurantoin 100mg MR BD
															</span>- </strong><u><strong>AVOID AT TERM (from 37
																weeks).</strong></u></p>

													<p><strong>2nd line: </strong><span
															style={{"color":"#8e44bd"}}><strong>Pivmecillinam 400mg STAT then
																200mg TDS</strong></span><strong><span
																style={{"color":"#8e44bd"}}> </span>(this is a
															penicillin-containing antibiotic)</strong></p>

													<p><strong>3rd line: </strong><span
															style={{"color":"#c0392b"}}><strong>Cefalexin 500mg
																TDS</strong></span> - <strong>avoid if penicillin
															allergy anaphylaxis.</strong></p>

													<p><strong>Treatment duration is a total of 7 days.</strong></p>
												</div>
											</div>

											<div className="card-header" id="pregnancyUTIResistence">
												<h5 className="mb-0"><button aria-controls="collapsePregnancyUTIResistence"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapsePregnancyUTIResistence"
														data-toggle="collapse" type="button">Resistance within our
														population</button></h5>
											</div>

											<div aria-labelledby="pregnancyUTIResistence" className="collapse"
												data-parent="#accordionPregnancyUTI"
												id="collapsePregnancyUTIResistence">
												<div className="card-body text-left">
													<p>Cefalexin has been chosen as first line choice as we have high
														levels of E coli sensitive to this antibiotic in our local
														population and it also concentrates well in the urine.  It
														is of utmost importance that UTI in pregnancy is treated
														promptly and effectively. We can be confident that this is the
														case if cephalexin is used in this population.</p>

													<p>Short term use of nitrofurantoin in pregnancy is unlikely to
														cause problems to the foetus. Nitrofurantoin i s contraindicated
														in patients with an eGFR of &le;45ml/min however it may be used
														with caution in patients with eGFR 30-44ml/min provided the
														duration of treatment does not exceed 7 days.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCUrine"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Primary Care Skin section--> */}

	<div aria-hidden="true" aria-labelledby="SkinLabel" className="portfolio-modal modal fade " id="PCSkin" role="dialog"
		tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="SkinLabel">Skin
									and Soft Tissue Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4 id="PCSkinTissue"><a href="#PCacne">Acne</a></h4>

								<h4><a href="#PCcellulitis">Cellulitis</a></h4>

								<h4><a href="#PCchickenpox">Chicken Pox</a></h4>

								<h4><a href="#PCderma">Dermatophyte Infection of the Skin</a></h4>

								<h4><a href="#PCdiabeticFoot">Diabetic Foot Infection</a></h4>

								<h4><a href="#PCfungalNail">Fungal Nail Infections</a></h4>

								<h4><a href="#PCHumanbitesSection">Human and Animal Bites</a></h4>

								<h4><a href="#PCimpetigo">Impetigo</a></h4>

								<h4><a href="#PCinsectBitesSection">Insect Bites and Stings</a></h4>

								<h4><a href="#PClegUlcers">Leg Ulcers / Pressure Sores</a></h4>

								<h4><a href="#PCscarletFever">Scarlet Fever</a></h4>

								<h4><a href="#PCshingles">shingles</a></h4>

								<h4><a href="#PCstrepA">Strep Group A</a></h4>

								<h4><a href="#PCMastitis">Mastitis</a></h4>

								<h4><a href="#PCHidSupSection">Hidradenitis Suppurativa</a></h4>
								<br />
								{/* <!--Insect Bites--> */}
								<div className="text-left border border-info rounded" id="PCinsectBitesSection">
									<h2 className="text-center" id="PCInsectBites">Insect Bites and Stings</h2>

									<p>Please note that a rapid-onset skin reaction is likely to be an inflammatory or
										allergic reaction rather than an infection.</p>

									<p>Most insect bites or stings will <u><strong>not</strong></u> require antibiotics.
									</p>

									<p>Advise patients:</p>

									<ol>
										<li>That skin redness and itching are common and may last for up to 10 days</li>
										<li>Avoid scratching as this may help reduce inflammation and the risk of
											infection</li>
										<li>They should seek medical help if symptoms worsen significantly at any time
											or they become systemically unwell</li>
									</ol>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionInsectBites">
										<div className="card">
											<div className="card-header" id="PCInsectbitesTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseInsectBitesTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseInsectBitesTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCInsectbitesTreatment" className="collapse"
												data-parent="#PCaccordionInsectBites"
												id="PCcollapseInsectBitesTreatment">
												<div className="card-body text-left">
													<p>Do not routinely offer antibiotics if there are no signs or
														symptoms of spreading cellulitis.</p>

													<p>Be aware that people may wish to consider oral antihistamines (in
														those over 1 year old) to help relieve itching.</p>

													<p>If signs and symptoms of infection treat as <a
															href="#PCcellulitis"> cellulitis</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Bites--> */}
								<div className="text-left border border-info rounded" id="PCHumanbitesSection">
									<h2 className="text-center" id="PCbites">Human and Animal Bites</h2>

									<p><strong><u><span style={{"color":"black"}}>Note:</span></u></strong><strong><u><span
													style={{"color":"#e74c3a"}}> see also section below under the heading
													animal and human bites to the hand including clenched fist
													injuries.</span></u></strong></p>

									<p>Antibiotic prophylaxis is recommended for all wounds under 72 hours old even if
										there is no sign of infection.  Consider if tetanus prophylaxis is needed.
										Assess the HIV, hepatitis B and C and syphillis risk and if necessary discuss
										with a Consultant in Communicable Disease Control.</p>

									<p>If the skin is not broken just clean it, but if the skin is broken irrigate it
										with warm, running water. Send the patient to ED if severe.</p>

									<p><strong>Check tetanus status</strong> and immunise if necessary. 
										Prophylaxis is advised for puncture wounds, any bite involving the hand, face,
										foot, joint tendon or ligament, and in immunocompromised, diabetic, asplenic or
										elderley patients.</p>

									<p>If treating an<strong> insect bite</strong> then treat
										as <u><strong>cellulitis</strong></u>.  True cellulitis is a systemic
										infection and you would expect some systemic signs and symptoms, please ensure
										an infection is confirmed as all insect bites do not need to be treated with
										antibiotics. (See <a href="#PCcellulitis"> cellulitis</a> for treatment of
										infected insect bites)</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionBites">
										<div className="card">
											<div className="card-header" id="PCbitesTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseBitesTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseBitesTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCbitesTreatment" className="collapse"
												data-parent="#PCaccordionBites" id="PCcollapseBitesTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Co-amoxiclav 625 mg
																TDS</strong></span> for 5 days</p>

													<p><strong><u>Penicillin allergy</u></strong></p>

													<p><span style={{"color":"#8e44bd"}}><strong>Doxycycline 200mg po for the
																first dose then 100mg po bd</strong></span> for 5 days
													</p>
												</div>
											</div>

											<div className="card-header" id="PCBitesHand">
												<h5 className="mb-0"><button aria-controls="collapsePCBiteHand"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#collapsePCBiteHand" data-toggle="collapse"
														type="button">Animal and Human Bites to the Hand</button></h5>
											</div>

											<div aria-labelledby="PCBitesHand" className="collapse"
												data-parent="#PCaccordionBites" id="collapsePCBiteHand">
												<div className="card-body text-left">
													<p><span style={{"color":"#333334"}}>Animal and human bites to the hand
															including clenched fist injuries (&#39;fight-bite&#39;) are
															at <u>greater risk for development of complications</u>
															associated with infection particularly septic arthritis,
															osteomyelitis and tendon sheath infection.</span></p>

													<p><span style={{"color":"#333334"}}>These patients would require
															<u>hospital admission</u> for intravenous antibiotic
															treatment as well as <u>orthopaedic review</u> with
															assessment of surgical intervention including joint washout
															and tissue debridement.</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Cellulitis--> */}
								<div className="text-left border border-info rounded" id="PCcellulitisSection">
									<h2 className="text-center" id="PCcellulitis">Cellulitis</h2>

									<p>True cellulitis is a systemic infection and you would expect some systemic signs
										and symptoms.</p>

									<p>This treatment also applies if there is <strong><u>spreading
												cellulitis</u></strong> resulting from an insect bite (please
										ensure an infection is confirmed as all insect bites <u>do
											not</u> need to be treated with antibiotics). </p>

									<p>If there is history of exposure to fresh water, i.e. rivers or streams (Aeromonas
										hydrophilia) at the site add <strong>ciprofloxacin</strong> (750 mg
										twice daily 7 days) and if there is history of exposure to salt water (Vibrio
										vulnificus) add <strong>doxycycline</strong> (200mg stat then 100mg
										daily 7 days total).</p>

									<p>Doxycycline must NOT be prescribed for children under 12 years, or for pregnant
										or breast-feeding women.</p>

									<p>Please refer to the full guidance distributed for the community IV cellulitis
										pathway</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionCellulitis">
										<div className="card">
											<div className="card-header" id="PCcellulitisTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseCellulitisTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseCellulitisTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCcellulitisTreatment" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseCellulitisTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000cc"}}><strong>Flucloxacillin 1g QDS for 5
																days</strong></span></p>

													<p><strong><u>Penicillin allergy</u></strong></p>

													<p><span style={{"color":"#990065"}}><strong>Clindamycin 450mg QDS for 5
																days </strong></span></p>
												</div>
											</div>

											<div className="card-header" id="PCcellulitisFacial">
												<h5 className="mb-0"><button aria-controls="PCcollapseCellulitisFacial"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseCellulitisFacial" data-toggle="collapse"
														type="button">Facial Cellulitis</button></h5>
											</div>

											<div aria-labelledby="PCcellulitisFacial" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseCellulitisFacial">
												<div className="card-body text-left">
													<p><span style={{"color":"rgb(0,0,255)"}}><strong>Co-amoxiclav 625 mg
																TDS</strong></span> <span
															style={{"color":"rgb(0,0,255)"}}><strong>for 10
																days.</strong></span></p>

													<p> </p>

													<p><span style={{"color":"rgb(0,0,0)"}}><u><strong>Penicillin
																	allergy</strong></u></span></p>

													<p><span style={{"color":"rgb(128, 0, 128)"}}><strong>Clindamycin 450mg po
																QDS for 10 days.</strong></span></p>

													<p> </p>

													<p>If the patient is febrile and acutely ill, refer to hospital for
														IV treatment.</p>
												</div>
											</div>

											<div className="card-header" id="PCCommIVTher">
												<h5 className="mb-0"><button aria-controls="PCcollapsePCCommIVTher"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapsePCCommIVTher" data-toggle="collapse"
														type="button">Community IV Therapy</button></h5>
											</div>

											<div aria-labelledby="PCCommIVTher" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapsePCCommIVTher">
												<div className="card-body text-left">
													<table border="1" cellSpacing="0"
														className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#bfbfbf", "width":"503.25pt"}}>
																	<p><strong>Cellulitis Antibiotic Formulary</strong>
																	</p>

																	<p><strong>(Treat only until acute inflammation
																			disappears)</strong></p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#bfbfbf", "width":"503.25pt"}}>
																	<p><strong>ERON CLASS I</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#bfbfbf", "width":"170.15pt"}}>
																	<p><strong>Antibiotic</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"42.5pt"}}>
																	<p><strong>Route</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"120.5pt"}}>
																	<p><strong>Dose</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"63.8pt"}}>
																	<p><strong>Frequency</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"2.0cm"}}>
																	<p><strong>Duration</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"49.6pt"}}>
																	<p><strong>Review</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#c6e6a2", "width":"170.15pt"}}>
																	<p>Flucloxacillin</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"42.5pt"}}>
																	<p>Oral</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"120.5pt"}}>
																	<p>1g</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"63.8pt"}}>
																	<p>QDS</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffdb69", "width":"503.25pt"}}>
																	<p><strong>In penicillin allergy:</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#c6e6a2", "width":"170.15pt"}}>
																	<p>Clarithromycin</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"42.5pt"}}>
																	<p>Oral</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"120.5pt"}}>
																	<p>500mg</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"63.8pt"}}>
																	<p>B.D.</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#c6e6a2", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffc000", "width":"503.25pt"}}>
																	<p><strong>ERON CLASS II</strong></p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#bfbfbf", "width":"503.25pt"}}>
																	<p><strong>Oral treatment</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#bfbfbf", "width":"170.15pt"}}>
																	<p><strong>Antibiotic</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"42.5pt"}}>
																	<p><strong>Route</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"120.5pt"}}>
																	<p><strong>Dose</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"63.8pt"}}>
																	<p><strong>Frequency</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"2.0cm"}}>
																	<p><strong>Duration</strong></p>
																</td>
																<td style={{"backgroundColor":"#bfbfbf", "width":"49.6pt"}}>
																	<p><strong>Review</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>Flucloxacillin</p>

																	<p>Plus</p>

																	<p>Clindamycin</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p>Oral</p>

																	<p> </p>

																	<p>Oral</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>1g</p>

																	<p> </p>

																	<p>450mg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>QDS</p>

																	<p> </p>

																	<p>QDS</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p>3 days</p>

																	<p> </p>

																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p>Day 4</p>

																	<p> </p>

																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffdb69", "width":"503.25pt"}}>
																	<p> <strong>In penicillin allergy:</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>Clindamycin</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p>Oral</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>450mg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>QDS</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#bfbfbf", "width":"503.25pt"}}>
																	<p><strong>IV treatment</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>Flucloxacillin via Elastomeric pump</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p>IV</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>8g</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>24 hours</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>In the case of chemical phlebitis</p>

																	<p>From pump-Change to Clindamycin</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p> </p>

																	<p>Oral</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p> </p>

																	<p>450mg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p> </p>

																	<p>Q.D.S.</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p> </p>

																	<p>3 days</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p> </p>

																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffdb69", "width":"503.25pt"}}>
																	<p><strong>In penicillin allergy:</strong></p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>Teicoplanin</p>
																</td>
																<td colSpan="5"
																	style={{"backgroundColor":"#ffdb69", "width":"333.1pt"}}>
																	<p> </p>
																</td>
															</tr>
															<tr>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>If 50-70kg</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p>IV</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>Day 1 = 800mg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>Stat</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>Day 2 &amp; 3 = 10mg/kg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>Once daily</p>
																</td>
															</tr>
															<tr>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"170.15pt"}}>
																	<p>If &gt; 70kg</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"42.5pt"}}>
																	<p>IV</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>Day 1 = 12mg/kg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>Stat</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"2.0cm"}}>
																	<p>3 days</p>
																</td>
																<td rowSpan="2"
																	style={{"backgroundColor":"#ffdb69", "width":"49.6pt"}}>
																	<p>Day 4</p>
																</td>
															</tr>
															<tr>
																<td style={{"backgroundColor":"#ffdb69", "width":"120.5pt"}}>
																	<p>Day 2 &amp; 3 = 10mg/kg</p>
																</td>
																<td style={{"backgroundColor":"#ffdb69", "width":"63.8pt"}}>
																	<p>Once daily</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffdb69", "width":"503.25pt"}}>
																	<p>Do pre-dose level before 4<sup>th</sup> dose and
																		if outside the therapeutic range, discuss with
																		Microbiologist/Antibiotic Pharmacist before
																		resuming treatment.</p>
																</td>
															</tr>
															<tr>
																<td colSpan="6"
																	style={{"backgroundColor":"#ffdb69", "width":"503.25pt"}}>
																	<p>If eGFR&lt;30ml/min dose of teicoplanin should be
																		obtained from Antibiotic Pharmacist.</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Dermatophyte--> */}
								<div className="text-left border border-info rounded" id="PCdermatoPhyteSection">
									<h2 className="text-center" id="PCderma">Dermatophyte Infection of the Skin</h2>

									<p>Take skin scrapings for culture. Topical azoles,<span
											style={{"color":"#0000AA"}}> <strong>clotrimazole 1 % or miconazole 2
												%</strong></span>, are useful if you are not sure if there is Candida or
										dermatophyte infection.  The azoles can take 4&ndash;6 weeks to work.
										Topical terbinafine 1% although more expensive can work with in a week. Consider
										oral treatment only if disease is extensive or severe (however, consider
										referral) or if topical treatment has failed. Discuss scalp infections with a
										specialist</p>
								</div>
								<br />
								{/* <!--Diabetic foot--> */}
								<div className="text-left border border-info rounded" id="PCdiabeticFootSection">
									<h2 className="text-center" id="PCdiabeticFoot">Diabetic Foot Infection</h2>

									<p>The recommendations for treatment of DFI have been made following
										discussion with Abigail Hall (High Risk Foot Team Podiatrist) and Dr Haris
										Rathur (Consultant for Adult Medicine).</p>

									<p>Refer to Diabetes Service</p>

									<p>email: <a href="mailto:integrated.diabetes@tgh.nhs.uk"
											target="_blank" rel="noreferrer">integrated.diabetes@tgh.nhs.uk</a> (Contact High Risk
										Foot Podiatry on<a href="tel:01619224888">0161 922 4888</a>)</p>

									<p><span style={{"color":"#e74c3a"}}><strong>All patients with Diabetic Foot Ulcers MUST
												be under the care of a Podiatrist</strong></span></p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionDiabeticFoot">
										<div className="card">
											<div className="card-header" id="PCdiabeticFootMild">
												<h5 className="mb-0"><button aria-controls="PCcollapseDiabeticFootMild"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseDiabeticFootMild" data-toggle="collapse"
														type="button">Mild Infection</button></h5>
											</div>

											<div aria-labelledby="PCdiabeticFootMild" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseDiabeticFootMild">
												<div className="card-body text-left">
													<p>Presence of at least 2 of the following:</p>

													<p>local swelling, erythema, local tenderness or pain, local warmth,
														purulent discharge.</p>

													<p>Local infection involving only skin and subcutaneous tissue. If
														erythema, must be &lt;2cm around ulcer</p>

													<p><span style={{"color":"#0000AA"}}><strong>Flucloxacillin 1g QDS for a
																maximum of 5 days </strong></span>(review after 3 days)
													</p>

													<p><u>Penicillin allergy</u></p>

													<p><span style={{"color":"#990065"}}><strong>Clarithromycin 500mg BD for a
																maximum of 5 days </strong></span>(review after 3 days)
													</p>
												</div>
											</div>

											<div className="card-header" id="PCdiabeticFootMod">
												<h5 className="mb-0"><button aria-controls="PCcollapseDiabeticFootMod"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseDiabeticFootMod" data-toggle="collapse"
														type="button">Moderate Infection</button></h5>
											</div>

											<div aria-labelledby="PCdiabeticFootMod" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseDiabeticFootMod">
												<div className="card-body text-left">
													<p>as above <strong>plus</strong> erythema &gt; 2cm but &lt;5cm, or
														involving structures deeper than skin and subcutaneous tissues.
													</p>

													<p><span style={{"color":"#0000AA"}}><strong>Co-amoxiclav 625mg TDS for a
																maximum of 5 days</strong></span> (review after 3 days)
													</p>
												</div>
											</div>

											<div className="card-header" id="PCdiabeticFootSev">
												<h5 className="mb-0"><button aria-controls="PCcollapseDiabeticFootSev"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseDiabeticFootSev" data-toggle="collapse"
														type="button">Severe Infection</button></h5>
											</div>

											<div aria-labelledby="PCdiabeticFootMod" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseDiabeticFootSev">
												<div className="card-body text-left">
													<p>Spreading cellulitis (&gt; 5cm from the wound), ascending
														lymphangitis, deep tissue abscess formation with or without
														systemic inflammatory response syndrome</p>

													<p><strong>arrange admittance into hospital for IV
															antibiotics</strong></p>

													<p>Note: Systemic infection may sometimes manifest with sepsis
														syndrome including fever, vomiting, hypotension, deranged
														blood glucose levels and confusion.  It is important to
														note that patients with ischaemia and neuropathy may not mount
														an appropriate inflammatory response, but nevertheless be
														extremely ill.</p>
												</div>
											</div>

											<div className="card-header" id="PCdiabeticFootRef">
												<h5 className="mb-0"><button aria-controls="PCcollapseDiabeticFootRef"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseDiabeticFootRef" data-toggle="collapse"
														type="button">References</button></h5>
											</div>

											<div aria-labelledby="PCdiabeticFootRef" className="collapse"
												data-parent="#PCaccordionCellulitis" id="PCcollapseDiabeticFootRef">
												<div className="card-body text-left">
													<p>National Institute of Health and Care Excellence (NICE),
														(2015).  <em>Diabetic foot problems: prevention and
															management, NICE guideline 19.</em>  <a
															href="http://www.nice.org.uk/guidance/ng19/chapter/1-Recommendations#diabetic-foot-infection-2"
															target="_blank" rel="noreferrer">http://www.nice.org.uk/guidance/ng19/chapter/1-Recommendations#diabetic-foot-infection-2</a>
													</p>

													<p>Lipsky, B.A., Berendt, A.R., Cornia, P.B., Pile, J.C., Peters,
														E.J.G., Armstrong, D.G.&hellip; Senneville, E. (2012) 2012
														Infectious Diseases Society of America Clinical Practice
														Guideline for the Diagnosis and Treatment of Diabetic Foot
														Infections.  <em>CID 2012</em>, 54:132-164</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Leg Ulcers--> */}
								<div className="text-left border border-info rounded" id="PClegUlcerSection">
									<h2 className="text-center" id="PClegUlcers">Leg Ulcers / Pressure Sores</h2>

									<p>Bacteria will always be present and therefore culture swabs of deeper tissues
										should be taken and not slough or necrotic tissue.  Systemic antibiotics
										are only indicated if there is evidence of clinical infection (e.g. increasing
										pain, pyrexia, spreading cellulitis, tissue induration, enlarging ulcer).</p>

									<p>In the absence of systemic features of infection, only topical
										treatment <strong><u>without</u></strong> the addition of
										systemic antibiotic is indicated for these patients</p>

									<p>Refer adults with an infected leg ulcer to hospital if they have any symptoms or
										signs suggesting a more serious illness or condition, such as sepsis,
										necrotising fasciitis or osteomyelitis.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionLegUlcer">
										<div className="card">
											<div className="card-header" id="PClegUlcersTop">
												<h5 className="mb-0"><button aria-controls="PCcollapseLegUlcer"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseLegUlcer" data-toggle="collapse"
														type="button">Topical Treatment</button></h5>
											</div>

											<div aria-labelledby="PClegUlcers" className="collapse"
												data-parent="#PCaccordionLegUlcer" id="PCcollapseLegUlcer">
												<div className="card-body text-left">
													<p>In consultation with the community tissue viability team, either:
													</p>

													<p><span style={{"color":"#0000AA"}}><strong>Flamazine (silver
																sulphadiazine) cream</strong></span><strong>
														</strong>for <u>non</u>-exudative wounds</p>

													<p>Apply at every dressing change</p>

													<p>OR</p>

													<p><span style={{"color":"#2ecc71"}}><strong>Medicinal honey (Mesitran
																soft ointment dressing)</strong></span> for wounds with
														an exudate</p>

													<p>Apply at every dressing change</p>
												</div>
											</div>

											<div className="card-header" id="PClegUlcerSys">
												<h5 className="mb-0"><button aria-controls="PCcollapseLegUlcerSys"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseLegUlcerSys" data-toggle="collapse"
														type="button">Systemic Treatment</button></h5>
											</div>

											<div aria-labelledby="PClegUlcerSys" className="collapse"
												data-parent="#PCaccordionLegUlcer" id="PCcollapseLegUlcerSys">
												<div className="card-body text-left">
													<p>If these ulcers are complicated by systemic features of
														infection (as above), give:</p>

													<p><span style={{"color":"#0000AA"}}><strong>Co-amoxiclav 625mg
																TDS</strong></span> for 5 days and <strong><u>then
																review</u></strong> - if the systemic symptoms of
														infection have resolved, stop antibiotics and continue topical
														treatment</p>

													<p>For penicillin allergy options please contact Consultant
														Microbiology on <a href="tel:01619224086"> 0161 922 4086</a>(or
														mobile via switchboard <a href="tel:01619226000">0161 922
															6000</a>)</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Shingles--> */}
								<div className="text-left border border-info rounded" id="PCshinglesSection">
									<h2 className="text-center" id="PCshingles">Shingles (Herpes Zoster)</h2>

									<p>Antivirals should be started within 72 hours of onset of the rash.</p>

									<p>They should be used in adults over 50 years, in the immunocompromised, in anyone
										with ophthalmic involvement, in anyone in severe, acute pain or with an
										extensive rash; they can also be used in people who are likely to come in close
										contact with &ldquo;at risk&rdquo; groups (e.g. immunocompromised, pregnancy).
									</p>

									<p>Specialist advice should be sought for immunocompromised patients.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionShingles">
										<div className="card">
											<div className="card-header" id="PCshinglesTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseShinglesTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseShinglesTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCshinglesTreatment" className="collapse"
												data-parent="#PCaccordionShingles" id="PCcollapseShinglesTreatment">
												<div className="card-body text-left">
													<p>1.  <span style={{"color":"#0000AA"}}><strong>Aciclovir 800 mg
																orally five times a day</strong></span> for 7 days</p>

													<p>2. <span style={{"color":"#800080"}}><strong> Valaciclovir 1g
																TDS</strong></span> for 7 days</p>

													<p><strong>or</strong></p>

													<p>3.  <span style={{"color":"#b22222"}}><strong>Famciclovir 250mg
																TDS</strong></span> for 7 days</p>

													<p>Aciclovir is by far the cheapest antiviral. If compliance is an
														issue valaciclovir or famciclovir can be given less frequently
														but these drugs are much more expensive (provided aciclovir is
														prescribed generically).</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Strep A--> */}
								<div className="text-left border border-info rounded" id="PCstrepSection">
									<h2 className="text-center" id="PCstrepA">Strep A Group Infection</h2>

									<p>Strep Group A infections can be clinically classified into 2 main groups:</p>

									<ul>
										<li>Non-invasive and treatable with oral antibiotics in the GP/outpatient
											setting and includes:
											<ul>
												<li>Pharyngotonsillitis</li>
												<li>Cellulitis</li>
												<li>Skin and wound infections (such as impetigo and chronic leg ulcers)
												</li>
												<li>Scarlet fever (toxin mediated infection).</li>
											</ul>
										</li>
										<li>Invasive and potentially life-threatening including:
											<ul>
												<li>Necrotizing fasciitis</li>
												<li>Bacteraemia (including bacteraemic pneumonia)</li>
												<li>Facial erysipelas</li>
												<li>Streptococcal toxic shock syndrome.</li>
											</ul>
										</li>
									</ul>

									<p>Differentiation between non-invasive and invasive Strep Group A infection is
										important for appropriate clinical management. Because of the potential for
										non-invasive Strep Group A infections to be become invasive all clinical
										laboratory <u>culture proven</u> Strep Group A infections must be
										treated with antibiotics as follows:</p>

									<p><strong>Amoxicillin 1g po tds </strong>for 10 days.
										(<strong>NOTE:</strong> for treatment of Strep Group A tonsillitis see <a
											data-dismiss="modal" data-target="#PCURT" data-toggle="modal" href="#PCURT">
											Pharyngitis / Tonsillitis</a> section in primary care guidelines.</p>

									<p> </p>

									<p><u><strong>Penicillin allergy</strong></u></p>

									<p><strong>Clarithromycin 500mg BD</strong> for 10 days.
										(<strong>NOTE:</strong> for treatment of Strep Group A tonsillitis see <a
											data-dismiss="modal" data-target="#PCURT" data-toggle="modal" href="#PCURT">
											Pharyngitis / Tonsillitis</a> section in primary care guidelines.</p>

									<p> </p>
								</div>
								<br />
								{/* <!--Impetigo--> */}
								<div className="text-left border border-info rounded" id="impetigo">
									<h2 className="text-center" id="PCimpetigo">Impetigo</h2>

									<p><strong>In those with uncomplicated impetigo</strong></p>

									<p>Explain the diagnosis and provide written information.</p>

									<ol>
										<li>A patient information leaflet on  <a
												href="http://www.bad.org.uk/for-the-public/patient-information-leaflets"
												target="_blank" rel="noreferrer"><u>Impetigo</u></a> can be downloaded from the
											British Association of Dermatologists website at  <a
												href="http://www.bad.org.uk/" target="_blank" rel="noreferrer">www.bad.org.uk</a>.</li>
										<li>Reassure the person that impetigo usually heals completely without scarring,
											and that serious complications are rare.</li>
										<li>Advise the person that hygiene measures are important to aid healing and
											stop infection spreading to other areas of the body and to other people.
										</li>
										<li>Recommend that the person:
											<ul>
												<li>Washes affected areas with soap and water.</li>
												<li>Washes their hands regularly, in particular after touching a patch
													of impetigo.</li>
												<li>Avoids scratching affected areas.</li>
												<li>Avoids sharing towels, face cloths, and other personal care products
													and thoroughly cleans potentially contaminated toys and play
													equipment.</li>
											</ul>
										</li>
										<li>Inform the person of Public Health England exclusion recommendations:
											<ul>
												<li>Children and adults should stay away from school and other
													childcare facilities or work until lesions are healed, dry
													and crusted over or 48 hours after initiation of antibiotics.</li>
												<li>Food handlers are required by law to inform employers immediately if
													they have impetigo.</li>
											</ul>
										</li>
										<li>Ensure optimal treatment of any pre-existing skin conditions such as eczema,
											head lice, scabies or insect bites.</li>
									</ol>

									<p>Mupirocin should be reserved for MRSA.  If widespread or long standing
										impetigo use systemic antibiotics.</p>

									<p>Do not offer combination treatment with a topical and oral antibiotic to treat
										impetigo.</p>

									<p>Ensure a review is undertaken to ensure sustained improvement or the need to
										escalate treatment.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionImpetigo">
										<div className="card">
											<div className="card-header" id="PCImpetigoNonBullous">
												<h5 className="mb-0"><button aria-controls="PCcollapseImpetigoNonBullous"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseImpetigoNonBullous"
														data-toggle="collapse" type="button">Localised Non-Bullous
														Impetigo</button></h5>
											</div>

											<div aria-labelledby="PCImpetigoNonBullous" className="collapse"
												data-parent="#PCaccordionImpetigo" id="PCcollapseImpetigoNonBullous">
												<div className="card-body text-left">
													<p><u>Topical agent</u> - for people with localised non-bullous
														impetigo who are not systemically unwell or at high risk of
														complications</p>

													<p><span style={{"color":"#0000AA"}}><strong>Hydrogen peroxide 1%
																cream</strong></span> (Crytacide) apply 2-3 times a
														day for 5 days</p>

													<p>Although other topical antiseptics are available for treating
														superficial skin infections, no evidence was found for using
														them to treat impetigo. </p>

													<p>If hydrogen peroxide 1% cream is unsuitable, then fusidic acid 2%
														(apply TDS for 5 days) may be considered as
														an alternative</p>
												</div>
											</div>

											<div className="card-header" id="PCImpetigoWidespreadNonBullous">
												<h5 className="mb-0"><button
														aria-controls="PCcollapseImpetigoWidespreadNonBullous"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseImpetigoWidespreadNonBullous"
														data-toggle="collapse" type="button">Widespread Non-Bullous
														Impetigo</button></h5>
											</div>

											<div aria-labelledby="PCImpetigoWidespreadNonBullous" className="collapse"
												data-parent="#PCaccordionImpetigo"
												id="PCcollapseImpetigoWidespreadNonBullous">
												<div className="card-body text-left">
													<p>Offer a short course of a topical or oral antibiotic for people
														with widespread non-bullous impetigo who are not systemically
														unwell or at high risk of complications</p>

													<p><strong><u>Topical</u></strong></p>

													<p><strong><span style={{"color":"#ff0099"}}>Fusidic acid 2% apply TDS for
																5 days</span></strong></p>

													<p><strong><u>Oral options</u></strong></p>

													<p><span style={{"color":"#0000AA"}}><strong>Flucloxacillin 1g
																QDS</strong></span> for 5 days</p>

													<p>Children:</p>

													<table border="1" className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td><strong>Age</strong></td>
																<td><strong>Dose</strong></td>
															</tr>
															<tr>
																<td>1 month to 1 year</td>
																<td>62.5mg - 125mg QDS</td>
															</tr>
															<tr>
																<td>2 years to 9 years</td>
																<td>125mg - 250mg QDS</td>
															</tr>
															<tr>
																<td>10 years to 17 years</td>
																<td>250mg - 500mg QDS</td>
															</tr>
														</tbody>
													</table>

													<p>If child weighs over 50kg use adult doses.</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong></span></p>

													<p><span style={{"color":"#800080"}}><strong>Clarithromycin 500mg
																BD</strong></span> for 5 days</p>
												</div>
											</div>

											<div className="card-header" id="PCImpetigBullous">
												<h5 className="mb-0"><button aria-controls="PCcollapseImpetigoBullous"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseImpetigoBullous" data-toggle="collapse"
														type="button">Bullous Impetigo</button></h5>
											</div>

											<div aria-labelledby="PCImpetigBullous" className="collapse"
												data-parent="#PCaccordionImpetigo" id="PCcollapseImpetigoBullous">
												<div className="card-body text-left">
													<p><strong><u>Bullous impetigo or impetigo in people who are
																systemically unwell or at high risk of
																complications</u></strong></p>

													<p>Offer a short course of an oral antibiotic for:</p>

													<ul>
														<li>all people with bullous impetigo</li>
														<li>people with non-bullous impetigo who are systemically unwell
															or at high risk of complications.</li>
													</ul>

													<p><strong><u>Oral options</u></strong></p>

													<p><span style={{"color":"#0000AA"}}><strong>Flucloxacillin 1g
																QDS</strong></span> for 5 days</p>

													<p>Children:</p>

													<table border="1" className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td><strong>Age</strong></td>
																<td><strong>Dose</strong></td>
															</tr>
															<tr>
																<td>1 month to 1 year</td>
																<td>62.5mg - 125mg QDS</td>
															</tr>
															<tr>
																<td>2 years to 9 years</td>
																<td>125mg - 250mg QDS</td>
															</tr>
															<tr>
																<td>10 years to 17 years</td>
																<td>250mg - 500mg QDS</td>
															</tr>
														</tbody>
													</table>

													<p>If child weighs over 50kg use adult doses.</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong></span></p>

													<p><span style={{"color":"#800080"}}><strong>Clarithromycin 500mg
																BD</strong></span> for 5 days</p>

													<p>(see <a href="https://bnfc.nice.org.uk/"
															target="_blank" rel="noreferrer">BNFc</a> for doses in children)</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Acne--> */}
								<div className="text-left border border-info rounded" id="acne">
									<h2 className="text-center" id="PCacne">Acne</h2>

									<p><u><strong>Topical treatment</strong></u></p>

									<p>In mild acne initial treatment should consist of topical benzoyl peroxide or a
										topical retinoid. Topical antibiotics may be used in moderate acne, or where
										there is treatment failure or intolerance to treatment in mild acne. Topical
										antibiotics should be used in combination with benzoyl peroxide (if tolerated)
										as this combination is more effective than using either drug in isolation, and
										because it limits the development of antibiotic resistance. Topical antibiotics
										should not be combined with topical retinoids as this combination may promote
										bacterial resistance.</p>

									<p>Topical antibiotic treatment should not be used long-term and should be stopped
										after 6-8 weeks. Consider switching to benzoyl peroxide at this point.</p>

									<p><u><strong>Oral treatment</strong></u></p>

									<p>Oral antibiotics may be considered in patients where topical treatment is not
										tolerated, there is moderate acne on the shoulders or back where it may be
										extensive or difficult to reach, or if there is a significant risk of scarring
										or pigment changes. Oral antibiotics may be combined with topical benzoyl
										peroxide or a topical retinoid, or both if tolerated. Oral and topical
										antibiotics should not be prescribed for concomitant use. Oral antibiotics may
										need to continue for 3 months before a response to treatment is seen.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionAcne">
										<div className="card">
											<div className="card-header" id="PCAcne">
												<h5 className="mb-0"><button aria-controls="PCcollapseAcne"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseAcne" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCAcne" className="collapse"
												data-parent="#PCaccordionAcne" id="PCcollapseAcne">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Lymecycline 408mg
																OD</strong></span></p>

													<p>If not tolerated or pregnant/breastfeeding:</p>

													<p><span style={{"color":"#800080"}}><strong>Erythromycin 500mg
																BD</strong></span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Fungal Nail--> */}
								<div className="text-left border border-info rounded" id="PCFungalNailSection">
									<h2 className="text-center" id="PCfungalNail">Fungal Nail Infections</h2>

									<p>If you suspect a dermatophyte infection of the proximal fingernail or toenail,
										take nail clippings for fungal culture. Only start treatment if infection is
										confirmed by the laboratory. This condition is rare in children so refer them
										for specialist advice.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionFungalNail">
										<div className="card">
											<div className="card-header" id="PCFungalNail">
												<h5 className="mb-0"><button aria-controls="PCcollapseFungalNail"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseFungalNail" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCFungalNail" className="collapse"
												data-parent="#PCaccordionFungalNail" id="PCcollapseFungalNail">
												<div className="card-body text-left">
													<p>For superficial infections only</p>

													<p><span style={{"color":"#0000AA"}}><strong>Amorolfine 5 % nail
																lacquer 1&ndash;2 times a week</strong></span> for 6
														months (fingers) or 12 months (toes)</p>

													<p><strong>or</strong></p>

													<p><span style={{"color":"#800080"}}><strong>Terbinafine 250 mg OD
															</strong></span>for 6&ndash;12 weeks (fingers) or 3&ndash;6
														months (toes)</p>

													<p><strong>or</strong></p>

													<p>For infections with yeasts and non-dermatophyte moulds use pulsed
														<span style={{"color":"#b22222"}}><strong>Itraconazole 200 mg
																BD</strong></span> <strong>for 7 days repeated
															monthly</strong>. For fingernails use 2 courses and for
														toenails use 3 courses.</p>

													<p>Rarely idiosyncratic liver reactions occur with
														terbinafine.  Tell patients to watch for signs of liver
														toxicity.</p>

													<p>Itraconazole should be avoided in patients at risk of heart
														failure and in patients taking statins (risk of myopathy) and it
														can also cause liver toxicity.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Chickenpox--> */}
								<div className="text-left border border-info rounded" id="PCchickenPoxSection">
									<h2 className="text-center" id="PCchickenpox">Chicken Pox</h2>

									<p>Always seek specialist advice for treatment and prophylaxis in pregnant women.
										For advice during normal working hours, contact the Clinical Virology department
										at Central Manchester University Hospitals on 0161 276 8853, and for clinical
										advice out of hours, telephone 0161 276 1234 and ask for the duty Consultant
										Virologist.</p>

									<p>In healthy adults and children with uncomplicated chickenpox no antiviral
										treatment is recommended. Antivirals are indicated in all patients who are
										immunocompromised and always seek specialist advice for these patients. If the
										patient is severely immunocompromised they will need hospital referral for
										intravenous aciclovir as well as varicella zoster immunoglobulin. 
										Antivirals should be used in an adult with clinical toxicity within 24 hours of
										onset of the rash using the same doses as in shingles.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionChickenPox">
										<div className="card">
											<div className="card-header" id="PCChickenPox">
												<h5 className="mb-0"><button aria-controls="PCcollapseChickenPox"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseChickenPox" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCChickenPox" className="collapse"
												data-parent="#PCaccordionChickenPox" id="PCcollapseChickenPox">
												<div className="card-body text-left"><span
														style={{"color":"#0000AA"}}><strong>Aciclovir 800mg orally five times
															for 7 days</strong></span></div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Mastitis--> */}
								<div className="text-left border border-info rounded " id="PCMastitisSection">
									<h2 className="text-center" id="PCmastitis">Mastitis</h2>

									<p>Lactational</p>

									<p>Most cases of lactational mastitis are not caused by an infection and do not
										require antibiotics. Advice is to take paracetamol or ibuprofen to reduce pain
										and fever, drink plenty of fluids, rest and apply a warm compress.
										Breastfeeding: oral antibiotics are safe and appropriate, where indicated. Women
										should continue feeding, including from the affected breast and be advised to
										monitor the child for adverse drug reactions e.g. diarrhoea and thrush.</p>

									<p>Non-Lactation</p>

									<p>If immediate admission or referral is not indicated then prescribe an oral
										antibiotic for all women with non-lactational mastitis. Advise the woman to seek
										immediate medical advice if symptoms worsen or fail to settle after 48 hours of
										antibiotic treatment.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionMastitis">
										<div className="card">
											<div className="card-header" id="PCMastitis">
												<h5 className="mb-0"><button aria-controls="PCcollapseMastitis"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseMastitis" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCMastitis" className="collapse"
												data-parent="#PCaccordionMastitis" id="PCcollapseMastitis">
												<div className="card-body text-left"><span
														style={{"color":"#0000AA"}}><strong>Flucloxacillin 1g QDS for 10
															days</strong></span>

													<div>
														<div>
															<p> </p>
															<span>Penicillin allergy (if rash)</span>

															<p><span style={{"color":"#800080"}}><strong>Cefalexin 1g TDS for
																		10 days</strong></span></p>

															<p><strong>If symptoms fail to settle after 48 hours of <a
																		href="https://cks.nice.org.uk/topics/mastitis-breast-abscess/management/management-lactating-women/#indications-for-immediate-admission-or-referral">first-line
																		antibiotic treatment</a>:</strong></p>

															<p> </p>

															<ul>
																<li>Check that the woman has taken the antibiotic
																	correctly.</li>
																<li>Consider the possibility of an <a
																		href="https://cks.nice.org.uk/topics/mastitis-breast-abscess/diagnosis/differential-diagnosis/">alternative
																		diagnosis</a> (such as <a
																		href="https://cks.nice.org.uk/topics/mastitis-breast-abscess/diagnosis/differential-diagnosis/">breast
																		cancer</a> or a <a
																		href="https://cks.nice.org.uk/topics/mastitis-breast-abscess/diagnosis/when-to-suspect-a-breast-abscess/">breast
																		abscess</a>) and the need for <a
																		href="https://cks.nice.org.uk/topics/mastitis-breast-abscess/management/management-lactating-women/#indications-for-immediate-admission-or-referral">admission
																		or referral</a>.
																	<ul>
																		<li>If an abscess is suspected, be aware that
																			malaise and fever may have subsided if
																			antibiotics have been started.</li>
																	</ul>
																</li>
															</ul>

															<p><span style={{"color":"#0000AA"}}><span>If truly penicillin
																		allergic then please contact Consultant
																		Microbiologist or Antibiotic Specialist
																		Pharmacists for advice</span></span></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Scarlet Fever--> */}
								<div className="text-left border border-info rounded" id="PCscarletFeverSection">
									<h2 className="text-center" id="PCscarletFever">Scarlet Fever</h2>

									<p>See <a data-dismiss="modal" data-target="#PCURT" data-toggle="modal"
											href="#PCURT"> Tonsillitis </a>section on the Upper Respiratory Infection
										page</p>
								</div>
								<br />
								{/* <!-- Hidradenitis Suppurativa --> */}
								<div className="text-left border border-info rounded " id="PCHidSupSection">
									<h2 className="text-center" id="PCHidSup">Hidradenitis suppurativa</h2>

									<p>Hidradenitis suppurativa is a chronic inflammatory suppurative disease of the
										apocrine sweat glands causing painful, inflamed nodules and sterile abscesses.
										Consider this if only the groin and the axillae are involved.</p>

									<p>It can cause painful, chronic, scarring skin condition that leads to the
										formation of lumps (nodules), abscesses, and draining channels in the skin. It
										often affects certain areas of the body including the armpits, breasts, groins
										and genitals, and bottom. The exact cause is unknown, but the disorder involves
										inflammation around the hair follicles in these areas. There is an association
										with smoking, being overweight, and other medical problems including arthritis,
										inflammatory bowel disease, and diabetes mellitus. Hidradenitis suppurativa has
										a significant impact on patients&rsquo; quality of life.</p>

									<p><b>TREATMENT SHOULD ONLY BE COMMENCED BY A DERMATOLOGIST IN SECONDARY CARE</b>
									</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionHidSup">
										<div className="card">
											<div className="card-header" id="PCHidSup">
												<h5 className="mb-0"><button aria-controls="PCcollapseHidSup"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseHidSup" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCHidSup" className="collapse"
												data-parent="#PCaccordionHidSup" id="PCcollapseHidSup">
												<div className="card-body text-left"><span
														style={{"color":"#0000AA"}}><strong>Clindamycin 300mg
															BD</strong></span>

													<div>
														<div>
															<p> </p>
															<span>Plus</span>

															<p><span style={{"color":"#800080"}}><strong>Rifampicin 300mg
																		BD</strong></span></p>

															<p> </p>

															<p> </p>

															<p><span style={{"color":"#0000AA"}}><span>for about 10 &ndash; 12
																		weeks</span></span></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!--floating icon--> */}
								<a className="float" href="#PCSkinTissue"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<br />
	{/* <!-- Primary Care Eye section--> */}
	<div aria-hidden="true" aria-labelledby="EyeLabel" className="portfolio-modal modal fade " id="PCEye" role="dialog"
		tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="EyeLabel">
									Ophthalmology Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>
								<br />
								{/* <!--Conjunctivitis--> */}
								<div className="text-left border border-info rounded" id="PCconjunctivitisSection">
									<h2 className="text-center" id="PCConjuctivitis">Conjuctivitis</h2>

									<div>
										<p>Only treat if severe, as most cases are viral or self limiting and 65% tend
											to resolve on placebo by day 5.  Bacterial conjunctivitis is usually
											unilateral and also self limiting. It is characterised by mucopurulent red
											eyes and not watery discharge.</p>
									</div>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionConj">
										<div className="card">
											<div className="card-header" id="PCConjPox">
												<h5 className="mb-0"><button aria-controls="PCcollapseConj"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseConj" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCConjPox" className="collapse"
												data-parent="#PCaccordionConj" id="PCcollapseConj">
												<p> </p>

												<div className="card-body text-left">
													<p>1st choice <span
															style={{"color":"#0000AA"}}><strong>Chloramphenicol 0.5 % eye
																drops 1 drop 2 hourly </strong></span>for <u>2 days</u>,
														reducing to<span style={{"color":"#0000AA"}}><strong> 4
																hourly</strong></span> as the infection improves</p>

													<p><strong>plus </strong></p>

													<p><span style={{"color":"#800080"}}><strong>Chloramphenicol 1% eye
																ointment at night</strong></span></p>

													<p><strong>However treatment with eye drops alone may be
															sufficient.</strong></p>

													<hr />
													<p>2nd choice (ONLY if chloramphenicol not effective or
														unsuitable) <span
															style={{"color":"#b22222"}}><strong> Fusidic acid 1 % eye
																drops 1 drop BD</strong></span></p>

													<p>Continue both for 48 hours after resolution of symptoms</p>

													<p><strong>Swab the eye for culture and sensitivity</strong> if the
														infective conjunctivitis is not resolving after <strong><u>7
																days</u> </strong>of treatment. Swab all people who are
														sexually active for gonococcal and chlamydial infection who have
														conjunctivitis that persists for 14 days despite treatment.</p>

													<p><span style={{"color":"#ff0000"}}><strong>Please note that there as
																recently been a <u>significant price increase</u> of
																fusidic acid eye drops. Please ensure it is only
																prescribed as a second choice when absolutely necessary
																and chloramphenicol is not suitable</strong></span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCcon"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Primary Care Meningitis section--> */}

	<div aria-hidden="true" aria-labelledby="MeningitisLabel" className="portfolio-modal modal fade " id="PCmen"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="MeningitisLabel">Meningitis</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>
								<br />
								{/* <!--Meninigitis--> */}
								<div className="text-left border border-info rounded" id="PCMenSection">
									<h2 className="text-center" id="PCmen">Meningitis</h2>

									<div>
										<p>Rapid transfer to hospital remains the highest priority whether or not
											penicillin is given &ndash; minutes are precious. Provided it does not cause
											a delay in admission, benzylpenicillin should be administered as soon as
											meningococcal disease is suspected. PHE recommends all GPs carry
											benzylpenicillin and it should be given whilst transfer to hospital is being
											arranged.</p>

										<p>If a patient with suspected meningitis without a non-blanching rash cannot be
											transferred to hospital urgently, antibiotics should also be given.
											Benzylpenicillin is the antibiotic of choice however cefotaxime can be given
											in penicillin allergy. NICE guidance states, &lsquo;a history of a rash
											following penicillin is not a contraindication.&rsquo; However if there is a
											clear history of anaphylaxis after a previous dose of penicillin or
											cephalosporin arrange urgent transfer without administering antibiotics.</p>
									</div>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionMen">
										<div className="card">
											<div className="card-header" id="PCmentreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseMen"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseMen" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCMen" className="collapse" data-parent="#PCaccordionMen"
												id="PCcollapseMen">
												<div className="card-body text-left">
													<p>Treatment for adults (for children see CBNF for doses)</p>

													<p><span style={{"color":"#0000AA"}}><strong>Benzylpenicillin
																1.2g</strong></span> &ndash; ideally IV but IM if a vein
														cannot be accessed</p>

													<p><u><strong>Penicillin allergy (rash)</strong></u></p>

													<p><span style={{"color":"#800080"}}><strong>Cefotaxime 1g
															</strong></span>&ndash; ideally IV but IM if a vein cannot
														be accessed</p>

													<p><u><strong>Penicillin allergy (Anaphylaxis)</strong></u></p>

													<p><strong><span style={{"color":"#b22222"}}>Chloramphenicol 1g -
															</span></strong> IV</p>
												</div>
											</div>

											<div className="card-header" id="PCmenProph">
												<h5 className="mb-0"><button aria-controls="PCcollapseMenProph"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseMenProph" data-toggle="collapse"
														type="button">Prophylaxis for Close Contacts</button></h5>
											</div>

											<div aria-labelledby="PCmenProph" className="collapse"
												data-parent="#PCaccordionMen" id="PCcollapseMenProph">
												<div className="card-body text-left">
													<p><span style={{"color":"#000000"}}><u><strong>Indications for antibiotic
																	prophylaxis</strong></u></span></p>

													<p><span style={{"color":"#000000"}}>Antibiotic prophylaxis should be
															offered to the following:</span></p>

													<ul>
														<li><span style={{"color":"#000000"}}><strong>Close contacts
																</strong>-</span> those who have had prolonged close
															contact with the case in a household type setting during the
															seven days before onset of illness. Examples of such
															contacts would be those living and/or sleeping in the same
															household, pupils in the same dormitory, boy/girlfriends, or
															university students sharing a kitchen in a hall of
															residence.</li>
														<li><span style={{"color":"#000000"}}><strong>Transient contacts
																</strong></span>- those who have had transient close
															contact with a case <span style={{"color":"#000000"}}>
																<u><strong>only</strong></u> if </span>they have been
															<span style={{"color":"#000000"}}><strong>directly exposed to
																	large particle droplets/secretions from the
																	respiratory tract of a case around the time of
																	admission to hospital.</strong></span></li>
													</ul>

													<p>Close contact does<span style={{"color":"#000000"}}>
															<u><strong>NOT</strong></u> </span>include:</p>

													<ul>
														<li>staff and children attending same nursery or crèche</li>
														<li>students/pupils in same school/class/tutor group</li>
														<li>work or school colleagues</li>
														<li>friends</li>
														<li>residents of nursing/residential homes</li>
														<li>kissing on cheek or mouth (intimate kissing would normally
															bring the contact into the close, prolonged contact
															category)</li>
														<li>food or drink sharing or similar low level of salivary
															contact</li>
														<li>attending the same social function</li>
														<li>travelling in next seat on same plane, train, bus, or car
															(in the absence of intense exposure to nasopharyngeal
															secretions).</li>
													</ul>

													<p><span style={{"color":"#000000"}}><u><strong>Prevention of secondary
																	cases</strong></u></span></p>

													<p>Chemoprophylaxis should be prescribed following discussion with
														the specialist team at the PHE North West on 0344 225 0562
														within office hours and via Tameside Hospital switchboard
														out of hours&ndash;ask for the PHE North West on call.</p>

													<p>Tameside General Hospital will arrange the supply of antibiotic
														prophylaxis for household contacts of patients treated there.
													</p>

													<p>For other useful numbers please see <a
															href="https://www.gov.uk/emergency-contacts-public-health"
															target="_blank" rel="noreferrer"><span
																style={{"color":"#0066cc"}}>https://www.gov.uk/emergency-contacts-public-health</span></a>
													</p>

													<p><span style={{"color":"#000000"}}><strong>1st line:</strong></span></p>

													<p><strong><span style={{"color":"#000000"}}>Adult:</span><span
																style={{"color":"#0000AA"}}> Ciprofloxacin 500mg po as a
																single dose </span></strong>for an adult.</p>

													<p><strong>Neonate:</strong> <span
															style={{"color":"#0000AA"}}><strong>Ciprofloxacin 30mg/kg (max.
																per dose 125mg) po for 1 dose.</strong></span></p>

													<p><strong>Child 1 month&ndash;4 years:</strong> <span
															style={{"color":"#0000AA"}}><strong>Ciprofloxacin 30mg/kg (max.
																per dose 125mg) po for 1 dose.</strong></span></p>

													<p><strong>Child 5&ndash;11 years:</strong> <span
															style={{"color":"#0000AA"}}><strong>Ciprofloxacin 250mg po for 1
																dose.</strong></span></p>

													<p><strong>Child 12&ndash;17 years:</strong> <strong><span
																style={{"color":"#0000AA"}}>Ciprofloxacin 500mg po for 1
																dose.</span></strong></p>

													<p><span style={{"color":"#000000"}}><strong>Ciprofloxacin in
																pregnancy</strong></span></p>

													<p>A single dose of ciprofloxacin can be used for the prevention of
														secondary cases of meningococcal meningitis/bacteraemia in
														pregnancy.</p>

													<p><span style={{"color":"#000000"}}><strong>Or if unable to take
																ciprofloxacin or if contraindicated,</strong></span></p>

													<p><span style={{"color":"#000000"}}><strong>2nd line:</strong></span></p>

													<p><strong>Adult:</strong> <span
															style={{"color":"#0000AA"}}><strong>Rifampicin 600mg po every 12
																hours for 2 days.</strong></span></p>

													<p><strong>Neonate - 11 months: <span
																style={{"color":"#0000AA"}}>Rifampicin 5mg/kg po every 12
																hours for 2 days.</span></strong></p>

													<p><strong>Child 1&ndash;11 years: <span
																style={{"color":"#0000AA"}}>Rifampicin 10mg/kg po every 12
																hours (max. per dose 600mg), for 2 days.</span></strong>
													</p>

													<p><strong>Child 12&ndash;17 years:</strong> <strong><span
																style={{"color":"#0000AA"}}>Rifampicin 600mg po every 12 hours
																for 2 days.</span></strong></p>

													<p><span style={{"color":"#000000"}}><strong>Or if rifampicin is
																contraindicated,</strong></span></p>

													<p><span style={{"color":"#000000"}}><strong>3rd
																line:</strong></span><span
															style={{"color":"#0000AA"}}><strong> Ceftriaxone 250mg IM stat
																dose </strong></span>(<strong><span
																style={{"color":"#0000AA"}}>125mg in a child under
																12yrs</span></strong>)</p>

													<p>(NB not licensed for this indication).</p>

													<p>Further advice can be sought from Greater Manchester Health
														Protection Unit 0161 786 6710 or via switchboard out of hours.
													</p>

													<p><strong>References:</strong></p>

													<p>Public Health England. Guidance for the public health management
														of meningococcal disease in the UK. February 2018. <a
															href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/688835/Public_health_management_of_meningococcal_disease_guidelines.pdf"
															target="_blank" rel="noreferrer"><span
																style={{"color":"#0066cc"}}>https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/688835/Public_health_management_of_meningococcal_disease_guidelines.pdf</span></a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCcon"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Genital tract section--> */}

	<div aria-hidden="true" aria-labelledby="GenitalTractLabel" className="portfolio-modal modal fade " id="PCGT"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="GenitalTractLabel">Genital Tract Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<div>
									<p>Consider a diagnosis of Chlamydia infection in anyone who is (or has been)
										sexually active who presents with a genital infection.</p>

									<p>To identify Chlamydia infection first catch urine sample after holding urine in
										bladder for at least 1 hour, can be sent to the laboratory at Tameside General
										Hospital. A test for Chlamydia on first catch urine is very reliable and the
										specimen is also tested for gonorrhoea. Gonorrhoea positive cases should be
										referred for management by a GUM clinic where swabs for culture and sensitivity
										will betaken and contact tracing will be carried out.</p>

									<p><strong><u>Ashton Primary Care Sexual Health Clinic</u></strong></p>

									<p><strong>Ashton Primary Care Centre, 193 Old Street, Ashton-under-Lyne, OL6
											7SR</strong></p>

									<p><strong>0161 342 7101</strong></p>
								</div>

								<h4 id="PCGTI"><a href="#PCbacterialVaginosis">Bacterial Vaginosis</a></h4>

								<h4><a href="#PCcandidiasis">Candidiasis</a></h4>

								<h4><a href="#PCchlamydia">Chlamydia</a></h4>

								<h4><a href="#PCEpididymo">Epididymo - Orchitis</a></h4>

								<h4><a href="#PCGonorrhoea">Gonorrhoea</a></h4>

								<h4><a href="#PCInfectBarthCyst">Infected Bartholin&#39;s Cyst/Abcess</a></h4>

								<h4><a href="#PCPID">Pelvic Inflammatory Disease</a></h4>

								<h4><a href="#PCTrichomoniasis">Trichomoniases</a></h4>
								<br />
								{/* <!--Bacterial Vaginosis--> */}
								<div className="text-left border border-info rounded" id="PCbacterialVaginosis">
									<h2 className="text-center" id="PCBV">Bacterial Vaginosis</h2>

									<p>A seven day course of metronidazole is slightly more effective than 2g stat.</p>

									<p>Clindamycin gel is expensive but is a useful alternative if metronidazole cannot
										be tolerated</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionBV">
										<div className="card">
											<div className="card-header" id="PCBVTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseBV"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseBV" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCBV" className="collapse" data-parent="#PCaccordionBV"
												id="PCcollapseBV">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Metronidazole 400mg
																BD</strong></span> for 7 days</p>

													<p>or</p>

													<p><span style={{"color":"#008000"}}><strong>Metronidazole 2g
																STAT</strong></span></p>

													<p>or</p>

													<p><span style={{"color":"#800080"}}><strong>Metronidazole vaginal gel
																0.75% 5g</strong></span> nightly for 5 nights</p>

													<p>or</p>

													<p><span style={{"color":"#b22222"}}><strong>Clindamycin 2 % vaginal cream
																5g </strong></span>nightly for 7 nights (expensive)</p>

													<p>During pregnancy /breastfeeding avoid high dose regimens of
														metronidazole (2g stat dose). During lactation metronidazole
														enters breast milk and can alter the taste of breast milk,
														therefore avoid oral treatment in lactating women and use
														topical treatment instead.</p>
												</div>
											</div>
										</div>
									</div>
									<br />
									{/* <!--Candidiasis--> */}
									<div className="text-left border border-info rounded" id="PCcandidiasis">
										<h2 className="text-center" id="PCCandidae">Candidiasis</h2>

										<p>Many products are available over the counter, so check whether the patient
											has already self-treated. Systemic treatments are best reserved for failures
											of topical treatment and for patients who prefer oral treatment to topical.
										</p>
										{/* <!--Start accordian--> */}

										<div id="PCaccordionCandidae">
											<div className="card">
												<div className="card-header" id="PCCandidaeTreatment">
													<h5 className="mb-0"><button aria-controls="PCcollapseCandidae"
															aria-expanded="false" className="btn btn-link collapsed"
															data-target="#PCcollapseCandidae" data-toggle="collapse"
															type="button">Treatment</button></h5>
												</div>

												<div aria-labelledby="PCCandidae" className="collapse"
													data-parent="#PCaccordionCandidae" id="PCcollapseCandidae">
													<div className="card-body text-left">
														<p><strong><span style={{"color":"#0000AA"}}>Clotrimazole 10% vaginal
																	cream 5g single dose</span></strong></p>

														<p>or</p>

														<p><span style={{"color":"#800080"}}><strong>Clotrimazole pessary
																	500mg as a single dose</strong></span></p>

														<p>If <u>topical treatment fails</u> or the <u>patient prefers
																oral preparation</u>:</p>

														<p><strong><span style={{"color":"#008080"}}>Fluconazole 150mg orally
																	STAT</span></strong></p>

														<p><strong>In pregnancy avoid oral azole and use intravaginal
																treatment for 7 days</strong>:</p>

														<p><span style={{"color":"#b22222"}}><strong>Clotrimazole pessary
																	100mg </strong></span>at night for 6 nights</p>

														<p>(This slightly shorter treatment duration is considered
															acceptable by PHE as that is the number of pessaries in one
															original pack of clotrimazole 100mg pessaries).</p>

														<p>or</p>

														<p><span style={{"color":"#008000"}}><strong>Miconazole 2% cream 5g
																	BD</strong></span> as intravaginal application for 7
															days</p>

														<p>In pregnancy the use of an <u>applicator</u> to insert
															pessaries should be <u>avoided</u> and insertion by hand is
															preferable.</p>

														<p>The patient should be instructed to wash hands before
															insertion. For intravaginal creams where use of an
															applicator cannot be avoided, care must be taken to avoid
															injuring the cervix.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Chlamydia--> */}
								<div className="text-left border border-info rounded" id="PCchlamydia">
									<h2 className="text-center" id="PCChlamydia">Chlamydia</h2>

									<p>It is recommended that management of Chlamydia should be undertaken at Ashton
										Primary Care Sexual Health Clinic.</p>

									<p>The majority of sexually transmitted infection (STI) guidelines have until
										recently recommended a 1g single dose of azithromycin or 7 days of doxycycline
										as standard treatment for uncomplicated urogenital and oral chlamydia infection.
										Mycoplasma genitalium is emerging as a significant sexually transmitted pathogen
										and coinfection rates of 3%-15% with chlamydia have been reported. Recent data
										demonstrate an increasing prevalence of macrolide resistance in Mycoplasma
										genitalium , likely due to the widespread use of azithromycin to treat STIs, and
										the limited availability of diagnostic tests for Mycoplasma genitalium.</p>

									<p>As a consequence of its potential to select for macrolide resistance in
										Mycoplasma genitalium and its inadequacy as a treatment for rectal CT, the
										British Association for Sexual Health and HIV (BASHH) no longer recommends
										azithromycin for treatment of uncomplicated chlamydia infection at any site,
										regardless of the gender of the infected individual.</p>

									<p>Doxycycline 100mg bd for 7 days is now recommended as first line treatment for
										uncomplicated urogenital, pharyngeal and rectal chlamydia infections, with test
										of cure (TOC) for diagnosed rectal infections</p>

									<p>Test of cure (TOC )is not routinely recommended for uncomplicated genital
										chlamydia infection, because residual, non-viable chlamydial DNA may be detected
										by NAAT for 3&ndash;5 weeks following treatment.</p>

									<p>TOC is recommended in pregnancy, where poor compliance is suspected and where
										symptoms persist.</p>

									<p>Contacts of chlamydia positive patients should be treated immediately rather than
										waiting for a positive result. A urine specimen must be taken before treatment
										is commenced.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionChlamydia">
										<div className="card">
											<div className="card-header" id="PCChlamydiaTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseChlamydia"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseChlamydia" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCChlamydia" className="collapse"
												data-parent="#PCaccordionChlamydia" id="PCcollapseChlamydia">
												<div className="card-body text-left">
													<p>1st line: <span style={{"color":"#800080"}}><strong>Doxycycline
																100mg BD </strong></span>for 7 days</p>

													<p>2nd line:<span style={{"color":"#0000AA"}}><strong>Azithromycin 1g
																STAT</strong></span>, <span
															style={{"color":"#0000AA"}}><strong>followed by 500mg once
																daily </strong></span>for 2 days</p>

													<p><u>In pregnancy/breast feeding:</u></p>

													<p><span style={{"color":"#008080"}}><strong>Azithromycin 1g STAT,
																followed by 500mg once daily </strong></span>for 2
														days</p>

													<p>Due to the lower cure rate in pregnancy, a test for cure should
														be performed at least 5 weeks after treatment (6 weeks with
														azithromycin).</p>

													<p>Patients should be advised to avoid sexual contact for a week
														after treatment, even if using a condom, to prevent the risk of
														re-infection.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Epididymo-orchitis--> */}
								<div className="text-left border border-info rounded" id="epydidymo">
									<h2 className="text-center" id="PCEpididymo">Epididymo-Orchitis</h2>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionEpididymo">
										<div className="card">
											<div className="card-header" id="PCEpididymoTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseEpididymo"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseEpididymo" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCEpididymo" className="collapse"
												data-parent="#PCaccordionEpididymo" id="PCcollapseEpididymo">
												<div className="card-body text-left">
													<p><span style={{"color":"#000000"}}><u>Due to chlamydial
																infection</u>:</span></p>

													<p><span style={{"color":"#0000AA"}}><strong>Ceftriaxone 500mg IM
																stat</strong></span><span style={{"color":"#000000"}}> then
														</span><span style={{"color":"#0000AA"}}><strong>Doxycycline 100mg po
																bd</strong></span><span style={{"color":"#000000"}}> for <u>14
																days.</u></span></p>

													<p><span style={{"color":"#000000"}}>Refer to Tameside &amp; Glossop
															centre for sexual health for contact tracing.</span></p>

													<p><u>Due to Gram negative enteric organisms (urinary
															pathogens):</u></p>

													<p><u><span style={{"color":"#000000"}}><strong>1st
																	line:</strong></span></u><span
															style={{"color":"#0000AA"}}><strong> Co-trimoxazole 960mg po bd
															</strong></span><span style={{"color":"#000000"}}>for 10
															days.</span></p>

													<p><span style={{"color":"#000000"}}><u><strong>2nd
																	line:</strong></u></span> <span
															style={{"color":"#8e44bd"}}><strong>Ciprofloxacin 500mg po bd
															</strong></span><span style={{"color":"#000000"}}>for 10
															days</span></p>

													<p><strong>or</strong></p>

													<p><span style={{"color":"#8e44bd"}}><strong>ofloxacin 200mg po
																bd</strong></span><span style={{"color":"#0000AA"}}><strong>
															</strong></span><span style={{"color":"#000000"}}>for <u>14
																days.</u></span></p>

													<p><u><strong><span style={{"color":"black"}}>3rd
																	line:</span></strong></u><strong>
														</strong><strong><span style={{"color":"#e74c3a"}}>Doxycycline 100mg
																BD</span></strong> <span
															style={{"color":"#333334"}}>for 10 days.</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Gonorrhoea--> */}
								<div className="text-left border border-info rounded" id="PCgonorrhoea">
									<h2 className="text-center" id="PCGonorrhoea">Gonorrhoea</h2>

									<p>Because of varying antibiotic sensitivities gonorrhoea can be difficult to treat,
										and a test of cure is important. It is recommended that management of gonorrhoea
										should be undertaken at Ashton Primary Care Sexual Health Clinic, particularly
										in a climate of emerging antibiotic resistance.</p>
								</div>
								<br />
								{/* <!--InfectbarthCyst--> */}
								<div className="text-left border border-info rounded" id="PCInfectBarthCyst">
									<h2 className="text-center" id="PCinfectbarthCyst">Infected Bartholin&#39;s cyst/abscess
									</h2>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionInfectbarthCyst">
										<div className="card">
											<div className="card-header" id="PCInfectbarthCystTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseInfectbarthCyst"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseInfectbarthCyst" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCInfectbarthCyst" className="collapse"
												data-parent="#PCaccordionInfectbarthCyst"
												id="PCcollapseInfectbarthCyst">
												<div className="card-body text-left">
													<p><strong><span style={{"color":"#0000AA"}}>Cefalexin 1g
																TDS </span></strong><span
															style={{"color":"#000000"}}>plus</span><strong><span
																style={{"color":"#0000AA"}}> clindamycin 450mg
																QDS </span></strong><span style={{"color":"#000000"}}>for
															5 days.</span></p>

													<p><span style={{"color":"#000000"}}><strong>Note:</strong> cephalosporins
															can be given in penicillin allergy with a rash.</span></p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin allergy
																	(anaphylaxis):</u></strong></span></p>

													<p><span style={{"color":"#990065"}}><strong>Co-trimoxazole 960mg
																BD</strong></span><span
															style={{"color":"#c0392b"}}><strong> </strong></span><span
															style={{"color":"#000000"}}>plus</span><span
															style={{"color":"#800080"}}><strong> </strong></span><span
															style={{"color":"#990065"}}><strong>clindamycin 450mg
																QDS</strong></span><span style={{"color":"#000000"}}><strong>
															</strong>for 5 days.</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--PID--> */}
								<div className="text-left border border-info rounded" id="PID">
									<h2 className="text-center" id="PCPID">Pelvic Inflammatory Disease</h2>

									<p>Take appropriate specimens for chlamydia and gonococci then give a choice of
										treatment regimen as indicated below. Note that all Gonorrhoea positive cases
										should be referred for treatment to a GUM clinic.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionPID">
										<div className="card">
											<div className="card-header" id="PCPIDTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapsePID"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapsePID" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCPID" className="collapse" data-parent="#PCaccordionPID"
												id="PCcollapsePID">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Ceftriaxone 500mg IM single
																dose</strong></span></p>

													<p><u>followed by </u></p>

													<p><strong><span style={{"color":"#c0392b"}}>Metronidazole 400mg
																BD</span><span style={{"color":"#008000"}}> </span><span
																style={{"color":"#000000"}}>plus</span><span
																style={{"color":"#008000"}}><strong> </strong></span><span
																style={{"color":"#c0392b"}}>Doxycycline 100mg BD
															</span></strong><span style={{"color":"#000000"}}>for 14
															days.</span></p>

													<p>The above regimen is suitable for patients with penicillin
														allergy, where the nature of the allergy is a rash.</p>

													<p><span style={{"color":"#000000"}}><u><strong>Penicillin allergy
																	(anaphylaxis):</strong></u></span></p>

													<p><span style={{"color":"#c0392b"}}><strong>Metronidazole 400mg BD
															</strong></span><span
															style={{"color":"#000000"}}><strong>plus</strong></span><span
															style={{"color":"#008000"}}><strong><strong>
																</strong></strong></span><span
															style={{"color":"#c0392b"}}><strong>Ofloxacin 400mg BD
															</strong></span><span style={{"color":"#000000"}}>for 14
															days.</span></p>

													<p>(AVOID this regimen if high risk of gonococcal disease due to
														quinolone resistance).</p>

													<p>Doxycycline must NOT be prescribed for pregnant or breast -
														feeding women</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Trichomoniasis--> */}
								<div className="text-left border border-info rounded" id="Trichomoniasis">
									<h2 className="text-center" id="PCTrichomoniasis">Trichomoniasis</h2>
									As this is a sexually transmitted infection treatment of the partner is important.
									Other sexually transmitted infections may be present as well as Trichomonas. Refer
									to GUM clinic for confirmation of diagnosis, treatment and partner notification.
									There is emerging evidence that pregnant women with Trichomoniasis should be
									treated, but there is no alternative to Metronidazole. Wait until the second
									trimester before treating with 400mg twice daily for 7 days.
									{/* <!--Start accordian--> */}

									<div id="PCaccordionTrichomoniasis">
										<div className="card">
											<div className="card-header" id="PCTrichomoniasisTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseTrichomoniasis"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseTrichomoniasis" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCTrichomoniasis" className="collapse"
												data-parent="#PCaccordionTrichomoniasis" id="PCcollapseTrichomoniasis">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Metronidazole 400mg
																BD</strong></span> for 7 days</p>

													<p><strong>or</strong></p>

													<p><span style={{"color":"#800080"}}><strong>Metronidazole 2g
																stat</strong></span></p>

													<p>Consider clotrimazole for symptom relief (not cure) if
														metronidazole declined. During pregnancy avoid high dose
														regimens of metronidazole (2g stat dose)</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCGTI"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- LRTI--> */}

	<div aria-hidden="true" aria-labelledby="LRTILabel" className="portfolio-modal modal fade " id="PCLRT" role="dialog"
		tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="LRTILabel">
									Lower Respiratory Tract Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<div>
									<p>Many infections are viral but the principal bacterial pathogens in acute lower
										respiratory tract infections are Streptococcus pneumoniae (which is the most
										common cause of community-acquired pneumonia), Haemophilus influenzae and
										atypical organisms such as Legionella and Mycoplasma. Staphylococcus aureus
										lower respiratory infections can occur as a complication following influenza.
										Pseudomonas may be isolated from sputum cultures but, in the community, this
										would usually reflect colonisation and should not be treated; it may be helpful
										to discuss with a microbiologist if in doubt. Avoid use of low dose amoxicillin
										which may encourage bacterial resistance. Note that excessive use of quinolones
										(e.g. ciprofloxacin) and co-amoxiclav is implicated in development of MRSA and
										Clostridium difficile infections.</p>
								</div>

								<h4 id="PCLRTISection"><a href="#PCAcuteBronchitis">Acute Bronchitis</a></h4>

								<h4><a href="#PCAcuteExacBronch">Acute Exacerbation of Bronchiectasis</a></h4>

								<h4><a href="#PCAcuteCOPD">Acute Exacerbation of COPD</a></h4>

								<h4><a href="#PCCAP">Community-Acquired Pneumonia</a></h4>
								<br />
								{/* <!--Acute Bronch--> */}
								<div className="text-left border border-info rounded" id="AcuteBronchitis">
									<h2 className="text-center" id="PCAcuteBronchitis">Acute Bronchitis</h2>

									<p>Systematic reviews indicate antibiotics have marginal benefits in otherwise
										healthy adults. Explain to patients why they have not been prescribed
										antibiotics. Consider prescribing antibiotics for people who have a pre-existing
										co-morbid condition that impairs their ability to deal with infection or is
										likely to deteriorate with acute bronchitis. Consider immediate antibiotics in
										patients over 80 years old and ONE of: hospitalisation in past year, oral
										steroids, diabetic, congestive heart failure OR over 65 years with 2 of the
										above.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionacuteBronch">
										<div className="card">
											<div className="card-header" id="PCAcuteBronchTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseAcuteBronch"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseAcuteBronch" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCAcuteBronchTreatment" className="collapse"
												data-parent="#PCaccordionacuteBronch" id="PCcollapseAcuteBronch">
												<div className="card-body text-left">
													<p><span style={{"color":"rgb(0,0,255)"}}><strong>Amoxicillin 1g
																TDS</strong></span> for 3 days (or <span
															style={{"color":"rgb(0,0,255)"}}><strong>amoxicillin 500mg
																TDS</strong></span> for 5 days)</p>

													<p><span style={{"color":"rgb(0,0,0)"}}><u><strong>Penicillin
																	allergy</strong></u></span></p>

													<p><span style={{"color":"rgb(128, 0, 128)"}}><strong>Doxycycline 200 mg
																STAT then 100 mg OD</strong></span> for 5 days (or <span
															style={{"color":"rgb(128, 0, 128)"}}><strong>Doxycycline 200 mg
																STAT then 100 mg BD</strong></span> for 3 days)</p>

													<p>Doxycycline must NOT be prescribed for children under 12 years,
														or for pregnant or breast-feeding women.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Acute Exacerbation of Bronchiectasis--> */}
								<div className="text-left border border-info rounded" id="acuteExacBronch">
									<h2 className="text-center" id="PCAcuteExacBronch">Acute Exacerbation of Bronchiectasis
									</h2>

									<p>An acute exacerbation of bronchiectasis is sustained worsening of symptoms from a
										person&rsquo;s stable state.</p>

									<p>When choosing antibiotics, take account of:</p>

									<ul>
										<li>the severity of symptoms</li>
										<li>previous exacerbations, hospitalisations and risk of complications</li>
										<li>previous sputum culture and susceptibility results.</li>
									</ul>

									<p>NICE (2019) recommends to send a sputum sample for culture and susceptibility
										testing and then offer an antibiotic.  Also, when results of sputum culture
										are available:</p>

									<ul>
										<li>review choice of antibiotic</li>
										<li>only change antibiotic according to susceptibility results if bacteria are
											resistant and symptoms are not already improving, <strong>using narrow
												spectrum antibiotics when possible.</strong></li>
									</ul>

									<p>Refer to hospital if the person has any symptoms or signs suggesting a more
										serious illness or condition (for example, cardiorespiratory failure or sepsis).
									</p>

									<p>Seek specialist advice if:</p>

									<ul>
										<li>symptoms do not improve with repeated courses of antibiotics</li>
										<li>bacteria are resistant to oral antibiotics</li>
										<li>the person cannot take oral medicines (to explore giving intravenous
											antibiotics at home or in the community if appropriate)</li>
									</ul>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionAcuteExacBronch">
										<div className="card">
											<div className="card-header" id="PCAcuteExacBronchTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseAcuteExacBronch"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseAcuteExacBronch" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCAcuteExacBronch" className="collapse"
												data-parent="#PCaccordionAcuteExacBronch"
												id="PCcollapseAcuteExacBronch">
												<div className="card-body text-left">
													<p>Please ensure response to treatment is reviewed after 7 days at
														the very most.  DO NOT routinely offer two weeks of
														antibiotics without adequate review.  NICE (2019) guidance
														gives the duration of 7-14 as a guide and up to weeks may be
														required for some patients.  However, adequate review is
														crucial when treating exacerbation of bronchiectesis to ensure
														the patient is responding and not deteriorating.</p>

													<p>1.<span style={{"color":"#0000AA"}}><strong> Amoxicillin 1g
																TDS</strong></span>  (or <span
															style={{"color":"#0000AA"}}><strong>amoxicillin 500mg
																TDS</strong></span> if less than 50kg) for
														7-14 days</p>

													<p>or</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong> (or alternative regime if
															amoxicillin not suitable)</span></p>

													<p>2.<span style={{"color":"#800080"}}><strong> Doxycycline 200 mg STAT
																then 100 mg OD</strong></span> for 7-14 days (or
														<span style={{"color":"#800080"}}><strong>Doxycycline 200 mg STAT then
																100 mg BD</strong></span>)</p>

													<table border="1" className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td>
																	<p>If Legionella is suspected:</p>

																	<p>Add <span style={{"color":"#b22222"}}><strong>Clarithromycin
																				500mg BD</strong></span><span
																			style={{"color":"#0000AA"}}><strong>
																			</strong></span>for 7-14 days to
																		amoxicillin</p>
																</td>
															</tr>
														</tbody>
													</table>

													<p>If there is inadequate clinical response to amoxicillin
														and/or doxycyline, co-amoxiclav 625 mg TDS for 7-14 days can be
														tried as an alternative antibiotic. </p>

													<p>It is recommended that only hospital consultants should commence
														long-term antibiotic prophylaxis for
														bronchiectesis patients and that those patients who would
														benefit are carefully selected and closely monitored with
														regular follow ups.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--AcuteCOPD--> */}
								<div className="text-left border border-info rounded" id="AcuteCOPD">
									<h2 className="text-center" id="PCAcuteCOPD">Acute exacerbation of COPD</h2>

									<p>About up to 50% of cases are viral, 30-50% are bacterial and the rest are
										undetermined. Antibiotics are not indicated in the absence of
										purulent/mucopurulent sputum especially if not associated with increased
										dyspnoea or clinical toxicity.</p>

									<p>Treat exacerbations promptly with antibiotics if purulent sputum
										<strong>and</strong> increased shortness of breath <strong>and/or</strong>
										increased sputum volume.</p>

									<p>Risk factors for antibiotic resistant organisms include co-morbid disease, severe
										COPD, frequent exacerbations, antibiotics in last 3 months.</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionAcuteCOPD">
										<div className="card">
											<div className="card-header" id="PCAcuteCOPDRescue">
												<h5 className="mb-0"><button aria-controls="PCcollapseAcuteCOPD"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseAcuteCOPD" data-toggle="collapse"
														type="button">Rescue Packs</button></h5>
											</div>

											<div aria-labelledby="PCAcuteCOPD" className="collapse"
												data-parent="#PCaccordionAcuteCOPD" id="PCcollapseAcuteCOPD">
												<div className="card-body text-left">
													<p>There has been some recent information circulated on this from
														the medicines management team.  All patients issued with a
														rescue pack should <strong>ONLY</strong> be done so after a
														proper clinical assessment and the patient should be issued with
														an <strong><u>individualised and detailed care plan</u></strong>
														&ndash; so they are aware of what actions need to be taken.</p>

													<p>Please refrain from conducting practice-wide searches and sending
														out rescue pack prescriptions to all on the COPD or asthma
														registers.  This is inappropriate and the medicines supply
														chain will be unable to cope with such increased demand, meaning
														those actually requiring rescue medication will not be able to
														source it.</p>

													<p>COVID19 is a viral infection and so the advice stands as for all
														other respiratory viral pathogens.  If patients are unwell
														then they are advised to seek medication attention.</p>
												</div>
											</div>

											<div className="card-header" id="PCAcuteCOPDTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseAcuteCOPDTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseAcuteCOPDTreatment"
														data-toggle="collapse" type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCAcuteCOPDTreatment" className="collapse"
												data-parent="#PCaccordionAcuteCOPD" id="PCcollapseAcuteCOPDTreatment">
												<div className="card-body text-left">
													<p>1.<span style={{"color":"#0000AA"}}><strong> Amoxicillin 1g
																TDS</strong></span> for 3 days (or <span
															style={{"color":"#0000AA"}}><strong>amoxicillin 500mg
																TDS</strong></span> if less than 50kg for 5 days)
													</p>

													<p>or</p>

													<p><span style={{"color":"#000000"}}><strong><u>Penicillin
																	allergy</u></strong> (or alternative regime if
															amoxicillin not suitable)</span></p>

													<p>2.<span style={{"color":"#800080"}}><strong> Doxycycline 200 mg STAT
																then 100 mg OD</strong></span> for 5 days (or <span
															style={{"color":"#800080"}}><strong>Doxycycline 200 mg STAT then
																100 mg BD</strong></span> for 3 days)</p>

													<table border="1" className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td>
																	<p>If Legionella is suspected:</p>

																	<p>Add <span style={{"color":"#b22222"}}><strong>Clarithromycin
																				500mg BD</strong></span><span
																			style={{"color":"#0000AA"}}><strong>
																			</strong></span>for 5 days to amoxicillin
																	</p>
																</td>
															</tr>
														</tbody>
													</table>

													<p>If there is inadequate clinical response to amoxicillin
														and/or doxycyline, co-amoxiclav 625 mg TDS for 5 days can be
														tried as an alternative antibiotic. However, the diagnosis
														should also be reviewed to ensure that exacerbation is indeed
														bacterial in nature, as up to 50% of acute exacerbation of COPD
														are due to a viral cause.</p>

													<p>It is recommended that only hospital consultants should commence
														long-term antibiotic prophylaxis for COPD patients and that
														those patients who would benefit are carefully selected and
														closely monitored with regular follow ups.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--CAP--> */}
								<div className="text-left border border-info rounded" id="cap">
									<h2 className="text-center" id="PCCAP">Community-acquired Pneumonia</h2>

									<p>The intensity of pneumonia in the community can be assessed using the CRB65
										score;<strong> each factor scores one point:</strong></p>

									<ul>
										<li>confusion (abbreviated Mental Test score 8 or less, or new disorientation in
											person, place, or time);</li>
										<li>a raised respiratory rate (30 breaths per minute or more);</li>
										<li>a low blood pressure (diastolic 60 mmHg or less, or systolic less than 90
											mmHg);</li>
										<li>age 65 years or over.</li>
									</ul>

									<p><strong>Score 1 or 2: intermediate risk (1-10% mortality risk). </strong></p>

									<p><strong>Score 3 or 4: high risk (more than 10% mortality risk)</strong></p>

									<p>For life-threatening illness or where hospital admission is likely to be delayed,
										give intravenous <span style={{"color":"#0000AA"}}><strong>Benzylpenicillin
												1.2g</strong></span> (give intramuscular if a vein cannot be found) or
										<strong><span style={{"color":"#0000AA"}}>oral Amoxicillin 1g</span></strong>
										<strong>immediately</strong>.</p>

									<p>If it is felt that blood cultures are required, due to severity of illness,
										then the patient should be referred to secondary care.  It is vital that
										blood cultures are taken by someone who is appropriately trained to do so,
										reducing the chances of contamination.   </p>

									<p>NB: it is recognised that due to increased remote consultations it may not always
										be possible to obtain a BP reading.  Some patients may have suitable
										equipment at home, assisting the clinician in making an assesment.  The
										antibiotic choices have been amended to help with this in this current climate.
									</p>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionCap">
										<div className="card">
											<div className="card-header" id="PCCapTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseCap"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseCap" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCCap" className="collapse" data-parent="#PCaccordionCap"
												id="PCcollapseCap">
												<div className="card-body text-left">
													<table border="1" className="table table-striped table-bordered">
														<tbody>
															<tr>
																<td><span style={{"color":"#c0392b"}}><strong>CRB
																			score</strong></span></td>
																<td><span style={{"color":"#c0392b"}}><strong>Antibiotic
																			choice (5 day treatment)</strong></span>
																</td>
															</tr>
															<tr>
																<td>CRB = 0</td>
																<td>
																	<p><span style={{"color":"#0000AA"}}><strong>Doxycycline
																				200 mg STAT then 100 mg
																				BD</strong></span><span
																			style={{"color":"#800080"}}><strong>
																			</strong></span>(suitable for penicillin
																		allergy)</p>

																	<p>OR</p>

																	<p><span style={{"color":"#990065"}}><strong>Amoxicillin 1
																				g TDS</strong></span></p>
																</td>
															</tr>
															<tr>
																<td>CRB = 1-2</td>
																<td>
																	<p><span style={{"color":"#0000AA"}}><strong>Doxycycline
																				200 mg STAT then 100 mg
																				BD</strong></span><span
																			style={{"color":"#800080"}}><strong>
																			</strong></span>(suitable for penicillin
																		allergy)</p>

																	<p>OR</p>

																	<p><span style={{"color":"#990065"}}><strong>Amoxicillin 1
																				g
																				TDS </strong></span>PLUS <span
																			style={{"color":"#b22222"}}><strong>Clarithromycin
																				500mg BD</strong></span></p>
																</td>
															</tr>
															<tr>
																<td>CRB = 3-4</td>
																<td>
																	<p><strong><span style={{"color":"#66cc33"}}>Co-amoxiclav
																				625mg
																				TDS </span></strong>PLUS <span
																			style={{"color":"#b22222"}}><strong>Clarithromycin
																				500mg BD</strong></span></p>

																	<p><strong><span style={{"color":"#9900cc"}}>Levofloxacin
																				500mg BD</span><span
																				style={{"color":"#cc0099"}}> </span></strong>if
																		penicillin allergic</p>
																</td>
															</tr>
														</tbody>
													</table>

													<p>Post influenzal pneumonia can be due to S. aureus which usually
														requires hospital admission because of the clinical severity of
														staphylococcal pneumonia.  Following recovery consider
														pneumococcal vaccination.</p>
												</div>
											</div>

											<div className="card-header" id="PCCap19Treatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseCap19"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseCap19" data-toggle="collapse"
														type="button">COVID19 plus CAP</button></h5>
											</div>

											<div aria-labelledby="PCCap19Treatment" className="collapse"
												data-parent="#PCaccordionCap" id="PCcollapseCap19">
												<div className="card-body text-left">
													<p>The current COVID19 pandemic has highlighted the risk faced by
														older adults who are more susceptible to complications as a
														result of pneumonia.</p>

													<p>Comorbidities, impaired immunity and frailty, including a reduced
														ability to cough and to clear secretions from the lungs, can all
														contribute to this complication.</p>

													<p>Viruses are thought to cause around 50% of cases of
														pneumonia.  Viral pneumonia is generally less severe than
														bacterial pneumonia but can act as a precursor to it. 
														Preventing any pneumonia in older adults is preferable to
														treating it.</p>

													<p>Where physical examination and other ways of making an objective
														diagnosis are not possible, the clinical diagnosis of CAP of any
														cause in an adult can be informed by other clinical signs or
														symptoms such as:</p>

													<ul>
														<li>temperature above 38 <sup>o</sup>C</li>
														<li>respiratory rate above 20 breaths per minute</li>
														<li>heart rate above 100 beats per minute</li>
														<li>new confusion</li>
													</ul>

													<p>Use of NEWS2 score in the community for predicting the risk of
														clinical deterioration may be useful.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCLRTISection"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- HCA Infections--> */}

	<div aria-hidden="true" aria-labelledby="HCAILabel" className="portfolio-modal modal fade " id="PCHCAI" role="dialog"
		tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="HCAILabel">
									HealthCare Associated Infections</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4 id="PCHCA"><a href="#PCHCAIntro">Introduction</a></h4>

								<h4><a href="#PCHCARec">Key DoH Recommendations</a></h4>

								<h4><a href="#PCPreventionHCAI">Prevention &amp; Treatment of HCAIs</a></h4>
								<br />
								{/* <!--Introduction--> */}
								<div className="text-left border border-info rounded px-1" id="HCAIntro">
									<h2 className="text-center" id="PCHCAIntro">Introduction</h2>

									<p>In December 2003 The Department of health published a National Plan that set out
										the actions to control the transmission of Healthcare Associated Infections,
										Winning Ways: Working Together to reduce Healthcare Associated Infections in
										England. &lsquo;Action area Five&rsquo; of the plan refers to the &lsquo;Prudent
										use of Antibiotics&rsquo;. The key issue states that: &lsquo;Indiscriminate and
										inappropriate use of antibiotics to treat infection within a clinical service
										promotes the emergence of antibiotic resistant organisms and &lsquo;super
										bug&rsquo; strains.</p>
								</div>
								<br />
								{/* <!--DoH recommendations--> */}
								<div className="text-left border border-info rounded" id="dohrecs">
									<h2 className="text-center" id="PCHCARec">Key DoH Recommendations</h2>

									<ul>
										<li>Antibiotics normally to be used only after a treatable infection has been
											recognised or there is a high degree of suspicion of infection.</li>
										<li>Choice of antibiotic normally to be governed by local information about
											trends in antibiotic resistance or a known sensitivity of the organism.</li>
										<li>Antibiotics only to be taken by patients over the prescribed period at the
											correct dose.</li>
										<li>Prescription of the antibiotics for children to be carefully considered;
											they are often unnecessarily prescribed for common viral infections and the
											child is subsequently more likely to develop antibiotic resistance.</li>
										<li>Support for prudent antibiotic prescribing to be provided by clinical
											pharmacists, medical microbiologists and infectious disease physicians.</li>
										<li>Antibiotics to be used for prevention of infection only where benefit has
											been proven.</li>
										<li>Narrow-spectrum antibiotics to be preferred to the broad-spectrum groups.
										</li>
									</ul>
								</div>
								<br />
								{/* <!--Prevention of HCAIs--> */}
								<div className="text-left border border-info rounded" id="preventionHCAI">
									<h2 className="text-center" id="PCPreventionHCAI">Prevention of HCAIs</h2>
									{/* <!--Start accordian--> */}

									<div id="PCaccordionPrevention">
										<div className="card">
											<div className="card-header" id="PCPreventionCDIFF">
												<h5 className="mb-0"><button aria-controls="PCcollapsePreventionCDIFF"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapsePreventionCDIFF" data-toggle="collapse"
														type="button">Clostridium Difficile Infection</button></h5>
											</div>

											<div aria-labelledby="PCPreventionCDIFF" className="collapse"
												data-parent="#PCaccordionPrevention" id="PCcollapsePreventionCDIFF">
												<div className="card-body text-left">
													<p>Prevention of CDI relies on ensuring that patients do not become
														susceptible through disruption of their normal gut flora and on
														preventing as far as possible their exposure to the organism.
														These approaches are implemented through careful measures to
														control antibiotic usage and through routine infection control
														procedures.</p>

													<div id="PCaccordionCDIFF">
														<div className="card">
															<div className="card-header" id="PCPreventionCDIFFrecs">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapsePreventionCDIFFrecs"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapsePreventionCDIFFrecs"
																		data-toggle="collapse" type="button">Key
																		Recommendations</button></h5>
															</div>

															<div aria-labelledby="PCPreventionCDIFFrecs"
																className="collapse" data-parent="#PCaccordionCDIFF"
																id="PCcollapsePreventionCDIFFrecs">
																<div className="card-body text-left">
																	<p>For the purpose of preventing CDI, the main
																		component of an antibiotic policy should be:</p>

																	<ul>
																		<li>The avoidance of unnecessary antibiotic use.
																		</li>
																		<li>The use of narrow spectrum antibiotics
																			whenever the causative pathogen is known.
																		</li>
																		<li>Review of &ldquo;blind&rdquo; empiric
																			antibiotic therapy as soon as the causative
																			pathogen has been identified.</li>
																		<li>Avoidance, wherever possible, of the use of
																			antibiotic &lsquo;cocktails.&rsquo;</li>
																		<li>Regular (daily if possible) prescription
																			review to ensure that antibiotics are
																			discontinued as soon as possible.</li>
																	</ul>
																</div>
															</div>

															<div className="card-header" id="PCPreventionCDIFFIVABT">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapsePreventionCDIFFIVABT"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapsePreventionCDIFFIVABT"
																		data-toggle="collapse" type="button">Intravenous
																		Antibiotic Therapy</button></h5>
															</div>

															<div aria-labelledby="PCPreventionCDIFFIVABT"
																className="collapse" data-parent="#PCaccordionCDIFF"
																id="PCcollapsePreventionCDIFFIVABT">
																<div className="card-body text-left">
																	<p>If a patient is deemed suitable for intravenous
																		antibiotic therapy they may be treated at home
																		with intravenous antibiotics in accordance with
																		the OPAT pathways.  If CDI is known to be a
																		problem;</p>

																	<ul>
																		<li>It should be noted that parenteral
																			aminoglycosides (e.g. gentamicin), when
																			given alone, have seldom been associated
																			with CDI, although their potential serious
																			toxicity must be recognised.</li>
																		<li>Consideration should be given to whether the
																			intramuscular or intravenous route should be
																			used, since parenteral antimicrobials can be
																			less likely than oral preparations to
																			predispose to CDI. </li>
																	</ul>

																	<p>For further information on the prevention and
																		control of CDI, please refer to the Infection
																		Prevention Team on 0161 922 6194, C.difficile
																		Policy or contact the Microbiologist, for advice
																		on individual cases if required.</p>
																</div>
															</div>

															<div className="card-header" id="PCPreventionCDIFFTreatment">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapsePreventionCDIFFTreatment"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapsePreventionCDIFFTreatment"
																		data-toggle="collapse"
																		type="button">Treatment</button></h5>
															</div>

															<div aria-labelledby="PCPreventionCDIFFTreatment"
																className="collapse" data-parent="#PCaccordionCDIFF"
																id="PCcollapsePreventionCDIFFTreatment">
																<div className="card-body text-left">
																	<p>It is important to exclude non-infectious causes
																		of diarrhoea, such as laxatives, high-energy
																		feeds or inflammatory bowel disease. Usual
																		diarrhoeal pathogens, notably Salmonella,
																		Shigella, Campylobacter, E coli 0157 should be
																		tested for.</p>

																	<p>Consideration should be given to the possibility
																		of norovirus (depending on the time of year).
																	</p>

																	<p>Treatment should be initiated after receiving a
																		positive result from a stool sample if the
																		diarrhoea is not settling within about 72 hours
																		and the decision to treat should be based on the
																		clinical condition of the patient, i.e. either
																		acutely ill or otherwise well despite their
																		diarrhoea. It is important to <strong>palpate
																			the abdomen </strong>which in the acutely
																		ill patient would be tender with distension
																		versus soft, non-tender, not distended in the
																		patient who is well. Withdraw antibiotics if
																		possible. Mild cases will often resolve without
																		treatment if antibiotics are stopped. Consider
																		stopping PPIs if possible.</p>

																	<p><span style={{"color":"#0000AA"}}><strong>Metronidazole
																				400 mg TDS</strong></span> for <strong>3
																			to 10 days</strong> depending on clinical
																		response.</p>

																	<p>Consider also a probiotic yoghurt drink (Actimel)
																		100ml twice a day for 7 days.</p>

																	<p>Refractory disease:</p>

																	<p><span style={{"color":"#800080"}}><strong>Vancomycin
																				125 mg QDS</strong></span> for <strong>3
																			to 10 days</strong> depending on clinical
																		response.</p>

																	<p>Antibiotics can be stopped for CDI as soon as the
																		diarrhoea settles and the patient is not acutely
																		ill or debilitated and there is no abdominal
																		pain or tenderness.  Good hygiene is
																		important to prevent re-infection; patients
																		should wash their hands after using the toilet
																		and before eating with soap and water. 
																		Patients who do not respond to the above
																		treatment can be discussed with the hospital
																		microbiologists.</p>
																</div>
															</div>

															<div className="card-header" id="PCPreventionCDIFFretest">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapsePreventionCDIFFretest"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapsePreventionCDIFFretest"
																		data-toggle="collapse" type="button">Retesting
																		Criteria</button></h5>
															</div>

															<div aria-labelledby="PCPreventionCDIFFretest"
																className="collapse" data-parent="#PCaccordionCDIFF"
																id="PCcollapsePreventionCDIFFretest">
																<div className="card-body text-left">
																	<p>As the lab is now located at MRI for Tameside
																		they will automatically test for clostridium
																		difficile toxin if the stool fits a certain
																		criteria.  Another positive toxin test will
																		count as another case for Tameside and Glossop
																		CCG.</p>

																	<p>If a patient has previously been tested positive
																		for CDI and symptoms have now recurred please
																		contact the <u><span
																				style={{"color":"#008000"}}><strong>Infection
																					Prevention Team</strong></span></u>
																		on <strong>0161 922 6194</strong> </p>

																	<p>Or</p>

																	<p><span style={{"color":"#800080"}}><strong>Consultant
																				Microbiologist</strong></span>
																		on <strong>0161 922 4086 (Dr
																			Sacho)</strong> /<strong> 0161 922
																			6500 (Dr Unsworth)</strong></p>

																	<p><strong><u>BEFORE</u> </strong>sending
																		another sample for advice.  </p>

																	<p>This is to ensure whether a repeat sample is
																		required.</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="card-header" id="PCCRE">
												<h5 className="mb-0"><button aria-controls="PCcollapsePreventionCRE"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapsePreventionCRE" data-toggle="collapse"
														type="button">CRE</button></h5>
											</div>

											<div aria-labelledby="PCCRE" className="collapse"
												data-parent="#PCaccordionPrevention" id="PCcollapsePreventionCRE">
												<div className="card-body text-left">
													<p>Enterobacteriaceae are a large family of bacteria that usually
														live harmlessly in the gut of all humans and animals. However,
														these organisms are also some of the most common causes of
														urinary tract infections, intra-abdominal and bloodstream
														infections. They include species such as E coli, Klebsiella and
														Enterobacter.</p>

													<p>Carbapenems are a group of penicillin-like antibiotics. Until
														now, they have been the antibiotics that we could always rely
														upon to treat infections caused by Enterobacteriaceae.
														Carbapenemases are enzymes that destroy carbapenem antibiotics,
														conferring resistance to the bacteria. Carbapenemases are made
														by a small but growing number of Enterobacteriaceae, with
														resistance able to transfer between bacterial species.</p>

													<p>In the last 5 years England has seen a rapid increase in the
														incidence of infection and colonisation by multi-drug resistant
														carbapenemase-producing organisms. This reflects similar
														problems worldwide and indicates the urgent need for guidance,
														particularly on infection prevention and control management.</p>

													<p>Useful resources:</p>

													<p><a href="https://www.gov.uk/government/news/phe-carbapenemase-producing-enterobacteriaceae-toolkit-published"
															target="_blank" rel="noreferrer">https://www.gov.uk/government/news/phe-carbapenemase-producing-enterobacteriaceae-toolkit-published</a>
													</p>

													<p><a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/329232/CPE_Acute_Trust_Toolkit_Relevant_Literature_and_Resources.pdf"
															target="_blank" rel="noreferrer">https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/329232/CPE_Acute_Trust_Toolkit_Relevant_Literature_and_Resources.pdf</a>
													</p>

													<p><a href="https://www.gov.uk/government/publications/carbapenemase-producing-enterobacteriaceae-early-detection-management-and-control-toolkit-for-acute-trusts"
															target="_blank" rel="noreferrer">https://www.gov.uk/government/publications/carbapenemase-producing-enterobacteriaceae-early-detection-management-and-control-toolkit-for-acute-trusts</a>
													</p>
												</div>
											</div>

											<div className="card-header" id="PCESBL">
												<h5 className="mb-0"><button aria-controls="PCcollapsePreventionESBL"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapsePreventionESBL" data-toggle="collapse"
														type="button">ESBL&#39;s</button></h5>
											</div>

											<div aria-labelledby="PCESBLrecs" className="collapse"
												data-parent="#PCaccordionPrevention" id="PCcollapsePreventionESBL">
												<div className="card-body text-left">
													<ul>
														<li>Avoid inappropriate or excessive antibiotic therapy and
															prophylaxis.</li>
														<li>Ensure antibiotics are given at the correct dosage and for
															an appropriate duration.</li>
														<li>Limit the use of glycopeptide antibiotics (vancomycin and
															teicoplanin) to situations where their use has been shown to
															be appropriate. If possible, prolonged courses of
															glycopeptide therapy should be avoided.</li>
														<li>Reduce the use of broad-spectrum antibiotics, particularly
															third-generation cephalosporins and fluoroquinolones, to
															what is clinically appropriate.</li>
														<li>Instituting antibiotic stewardship programmes in healthcare
															facilities, key components of which include the
															identification of key personnel who are responsible for
															this, surveillance of antibiotic resistance and antibiotic
															consumption, and prescriber education. To combat resistance,
															the CCG Clinical Lead for Infection prevention recommends
															that:</li>
														<li>For community patients, repeated topical therapies should
															not be prescribed.</li>
														<li>Community patients need not be re-screened, unless they are
															pre-operative and there is direction to the GP in the form
															of a &lsquo;treatment and screening protocol&rsquo; from the
															hospital that is planning the surgery.</li>
														<li>Community patient&rsquo;s wounds need not be swabbed unless
															there are clinical signs of infection, (Consultation can be
															sought from the CCG Tissue Viability Nurse Specialist).</li>
														<li>Advice on good personal and home hygiene must be given to
															promote a reduction in MRSA colonisation.</li>
													</ul>

													<div id="PCaccordionESBLrecs">
														<div className="card">
															<div className="card-header" id="PCPreventionESBLrecs">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapseESBLrecs"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapseESBL"
																		data-toggle="collapse" type="button">Key
																		Recommendations</button></h5>
															</div>

															<div aria-labelledby="PCPreventionESBLrecs" className="collapse"
																data-parent="#PCaccordionCDIFF" id="PCcollapseESBLrecs">
																<div className="card-body text-left">
																	<ul>
																		<li>Effective control measures are less well
																			understood than for other types of
																			antibiotic resistant bacteria for example C.
																			difficile.  Until we know more about
																			how to control these bacteria it is
																			suggested that;</li>
																		<li>All care establishments should ensure that
																			hand washing and other infection control
																			procedures are rigorously enforced. Visitors
																			and patients should also practice good hand
																			hygiene</li>
																		<li>In some circumstances patients with ESBL
																			producing bacteria will be isolated whilst
																			in hospital to prevent spread to others</li>
																		<li>Individuals known to be colonised should not
																			share a room with someone with a urinary
																			catheter or IV line.</li>
																		<li>Minimising the use of antibiotics is crucial
																			in helping reduce spread.</li>
																		<li>Thorough cleaning should also be undertaken
																			to maintain a clean and safe environment
																		</li>
																		<li>For further information on the prevention
																			and control of ESBL infections, please refer
																			to the CCG Infection Prevention Service.
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="card-header" id="PCMRSA">
												<h5 className="mb-0"><button aria-controls="PCcollapseMRSA"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseMRSA" data-toggle="collapse"
														type="button">MRSA</button></h5>
											</div>

											<div aria-labelledby="PCMRSA" className="collapse"
												data-parent="#PCaccordionPrevention" id="PCcollapseMRSA">
												<div className="card-body text-left">
													<p>Prevention of CDI relies on ensuring that patients do not become
														susceptible through disruption of their normal gut flora and on
														preventing as far as possible their exposure to the organism.
														These approaches are implemented through careful measures to
														control antibiotic usage and through routine infection control
														procedures.</p>
													{/* <!--Start inner accordian--> */}

													<div id="PCaccordionMRSA">
														<div className="card">
															<div className="card-header" id="PCPreventionMRSArecs">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapseMRSArecs"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapseMRSArecs"
																		data-toggle="collapse" type="button">Key
																		Recommendations</button></h5>
															</div>

															<div aria-labelledby="PCMRSArecs" className="collapse"
																data-parent="#PCaccordionMRSA" id="PCcollapseMRSArecs">
																<div className="card-body text-left">
																	<ul>
																		<li>Avoid inappropriate or excessive antibiotic
																			therapy and prophylaxis.</li>
																		<li>Ensure antibiotics are given at the correct
																			dosage and for an appropriate duration.</li>
																		<li>Limit the use of glycopeptide antibiotics
																			(vancomycin and teicoplanin) to situations
																			where their use has been shown to be
																			appropriate. If possible, prolonged courses
																			of glycopeptide therapy should be avoided.
																		</li>
																		<li>Reduce the use of broad-spectrum
																			antibiotics, particularly third-generation
																			cephalosporins and fluoroquinolones, to what
																			is clinically appropriate.</li>
																		<li>Instituting antibiotic stewardship
																			programmes in healthcare facilities, key
																			components of which include the
																			identification of key personnel who are
																			responsible for this, surveillance of
																			antibiotic resistance and antibiotic
																			consumption, and prescriber education. To
																			combat resistance, the CCG Clinical Lead for
																			Infection prevention recommends that:</li>
																		<li>For community patients, repeated topical
																			therapies should not be prescribed.</li>
																		<li>Community patients need not be re-screened,
																			unless they are pre-operative and there is
																			direction to the GP in the form of a
																			&lsquo;treatment and screening
																			protocol&rsquo; from the hospital that is
																			planning the surgery.</li>
																		<li>Community patient&rsquo;s wounds need not be
																			swabbed unless there are clinical signs of
																			infection, (Consultation can be sought from
																			the CCG Tissue Viability Nurse Specialist).
																		</li>
																		<li>Advice on good personal and home hygiene
																			must be given to promote a reduction in MRSA
																			colonisation.</li>
																	</ul>
																</div>
															</div>

															<div className="card-header" id="PCPreventionMRSAtopical">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapseMRSAtopical"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapseMRSAtopical"
																		data-toggle="collapse" type="button">Topical
																		Decolonisation</button></h5>
															</div>

															<div aria-labelledby="PCMRSAtopical" className="collapse"
																data-parent="#PCaccordionMRSA"
																id="PCcollapseMRSAtopical">
																<div className="card-body text-left">
																	<p>For further information on the prevention and
																		control of MRSA colonisation / infections,
																		please refer to the CCG Infection Prevention
																		Service MRSA Policy or contact the
																		Microbiologist, or the CCG Infection Prevention
																		Service staff, for advice on individual cases,
																		if required.</p>
																</div>
															</div>

															<div className="card-header" id="PCPreventionMRSASysAbx">
																<h5 className="mb-0"><button
																		aria-controls="PCcollapseMRSASysAbx"
																		aria-expanded="false"
																		className="btn btn-link collapsed"
																		data-target="#PCcollapseMRSASysAbx"
																		data-toggle="collapse" type="button">Systemic
																		Antibiotic Therapy</button></h5>
															</div>

															<div aria-labelledby="PCMRSASysAbx" className="collapse"
																data-parent="#PCaccordionMRSA"
																id="PCcollapseMRSASysAbx">
																<div className="card-body text-left">
																	<p>The need for systemic antibiotic therapy should
																		be considered in immunocompromised patients or
																		those with severe disease, based on clinical
																		judgement and local susceptibilities of strains.
																		It is important to ensure empiric treatment also
																		provides cover against Streptococcus pyogenes.
																		Contact the Microbiologist for advice, if
																		required.</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								<a className="float" href="#PCHCA"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Primary Care Parasite section--> */}

	<div aria-hidden="true" aria-labelledby="ParasiteLabel" className="portfolio-modal modal fade " id="PCParasite"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="ParasiteLabel">
									Parasites</h2>

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4 id="PCParasites"><a href="#PCHeadlice">Headlice</a></h4>

								<h4><a href="#PCScabies">Scabies</a></h4>

								<h4><a href="#PCThreadworm">Threadworm (Enterobius Vermicularis)</a></h4>
								<br />
								{/* <!--Headlice--> */}
								<div className="text-left border border-info rounded" id="PCHeadliceSection">
									<h2 className="text-center" id="PCHeadlice">Headlice</h2>

									<p>Advise the individual or parent to use detection combing on wet or dry hair to
										confirm head lice infestation. All close contacts and household members should
										be checked. Only the presence of live lice confirms infestation and then
										treatment is necessary. There are 3 treatment options, none of which are 100 %
										effective, which can be discussed with the patient or parent.</p>

									<p><strong>1. Insecticide</strong></p>

									<p><strong>2. Dimeticone</strong></p>

									<p><strong>3. Wet combing</strong></p>

									<p>The latter 2 options are suitable in pregnancy and breastfeeding.</p>
									{/* <!--Start accordian headlice--> */}

									<div id="PCaccordionParasites">
										<div className="card">
											<div className="card-header" id="PCPreventionParaInsecticide">
												<h5 className="mb-0"><button aria-controls="PCcollapseParaInsecticide"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseParaInsecticide" data-toggle="collapse"
														type="button">Insecticide</button></h5>
											</div>

											<div aria-labelledby="PCParaInsecticide" className="collapse"
												data-parent="#PCaccordionParasites" id="PCcollapseParaInsecticide">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Malathion 0.5 % aqueous
																solution</strong></span></p>

													<p>Apply to dry hair and scalp, wash off after 12 hours and repeat
														in 7 days. 200 ml should be sufficient for an adult to have 2
														treatments.</p>

													<p>Treatment failure maybe due to resistance, reinfection from
														another household member or poor treatment technique.</p>
												</div>
											</div>

											<div className="card-header" id="PCPreventionParaDimet">
												<h5 className="mb-0"><button aria-controls="PCcollapseParaDimet"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseParaDimet" data-toggle="collapse"
														type="button">Dimeticone</button></h5>
											</div>

											<div aria-labelledby="PCParaDimet" className="collapse"
												data-parent="#PCaccordionParasites" id="PCcollapseParaDimet">
												<div className="card-body text-left">
													<p>Rub into dry hair and scalp, allow to dry naturally, shampoo off
														after 8 hours (or overnight); repeat after 7 days.</p>
												</div>
											</div>

											<div className="card-header" id="PCPreventionParaComb">
												<h5 className="mb-0"><button aria-controls="PCcollapseParaComb"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseParaComb" data-toggle="collapse"
														type="button">Wet Combing</button></h5>
											</div>

											<div aria-labelledby="PCParaComb" className="collapse"
												data-parent="#PCaccordionParasites" id="PCcollapseParaComb">
												<div className="card-body text-left">
													<p>Wash the hair with ordinary shampoo and apply plenty of
														conditioner. Untangle the hair with an ordinary comb and then
														work through the hair in sections with a louse detection comb
														drawing downwards from root to tip ensuring the whole head of
														hair is worked through.</p>

													<p>Remove lice and eggs from the comb by wiping or washing the comb.
														Four sessions at 4 day intervals are needed over 2 weeks. The
														process should continue until no live lice are found on 3
														consecutive sessions.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Scabies--> */}
								<div className="text-left border border-info rounded" id="PCScabiesSection">
									<h2 className="text-center" id="PCScabies">Scabies</h2>

									<p>Treat the patient and all members of the household, close contacts and sexual
										contacts with a topical insecticide within 24 hours.</p>

									<p><span style={{"color":"#0000CD"}}><strong>Permethrin 5 % dermal cream</strong></span>
									</p>

									<p><strong>should be used as first line treatment. Most adults should only need one
											tube of cream. The cream should be washed off after 8&ndash;12
											hours.</strong></p>

									<p><span style={{"color":"#800080"}}><strong>Malathion 0.5 % aqueous
												solution</strong></span></p>

									<p><strong>can be used second line if permethrin is unsuitable (e.g. if the patient
											is allergic to chrysanthemums) and washed off after 24 hours</strong>.</p>

									<p>If any treated areas are washed during the application time, the cream/lotion
										must be reapplied. The insecticide should be applied twice with applications one
										week apart. Treat the whole body including scalp, face, neck, ears and under the
										nails. Treating the face and scalp is important in the immunocompromised, very
										young and elderley. Refer if there is crusted scabies or if there have been
										multiple treatment failures.</p>
								</div>
								<br />
								{/* <!--Threadworm--> */}
								<div className="text-left border border-info rounded" id="PCThreadwormSection">
									<h2 className="text-center" id="PCThreadwormLabel">Threadworm (Enterobius Vermicularis)
									</h2>

									<p>Treat both the patient and all household members unless contraindicated. Good
										hygiene is very important in breaking the lifecycle of the worms:</p>

									<ul>
										<li>Hands should be washed after using the toilet and nails should be kept
											short.</li>
										<li>Showering or bathing in the morning, washing around the anus, is
											recommended.</li>
										<li>Underpants should be worn at night in bed and changed every morning</li>
										<li>Sleepwear and bedding should be washed</li>
										<li>Dusting and vacuuming of the surroundings (especially bedrooms) should be
											done and damp-dusting of the bathroom.</li>
									</ul>

									<p>Hygiene methods should be used for 2 weeks if drug treated; in those who do not
										receive drug treatment ,e.g. under 3 months, pregnant or breastfeeding women,
										they should be continued for 6 weeks.</p>
									{/* <!--Start accordian threadworm--> */}

									<div id="PCaccordionThreadworm">
										<div className="card">
											<div className="card-header" id="PCThreadworm">
												<h5 className="mb-0"><button aria-controls="PCcollapseThreadworm"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseThreadworm" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCParaThreadworm" className="collapse"
												data-parent="#PCaccordionThreadworm" id="PCcollapseThreadworm">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Mebendazole
															</strong></span>(over 2 years) <span
															style={{"color":"#0000AA"}}><strong>100 mg as a
																single</strong></span> dose r<u>epeat in 2 weeks</u></p>

													<p>if infection persists or if <u>under 2 years</u></p>

													<p><span style={{"color":"#800080"}}><strong>Piperazine and sennosides
																sachet</strong></span>: <u>3 - 12 months</u> <span
															style={{"color":"#800080"}}><strong>2.5 ml spoon</strong></span>
														(from sachet in water), <u>1 - 6 years</u> <span
															style={{"color":"#800080"}}><strong>5ml spoon</strong></span>
														repeat in 2 weeks.</p>

													<p>There is information in the cBNF on mebendazole dosing from 6
														months of age. However this is unlicensed so the patient
														information leaflet may cause alarm to the parent.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								<a className="float" href="#PCParasites"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Primary Care Gastro section--> */}

	<div aria-hidden="true" aria-labelledby="GastroLabel" className="portfolio-modal modal fade " id="PCGastro"
		role="dialog" tabIndex="-1">
		<div className="modal-dialog modal-xl" role="document">
			<div className="modal-content"><button aria-label="Close" className="close text-right mr-3" data-dismiss="modal" type="button"><span
						aria-hidden="true"><i className="fas fa-times"> </i></span></button>

				<div className="modal-body text-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* <!-- Portfolio Modal - Title--> */}
								<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="GastroLabel">
									Gastrointestinal</h2>
								{/* <!-- Icon Divider--> */}

								<div className="divider-custom">
									<div className="divider-custom-line"> </div>

									<div className="divider-custom-icon"><i className="fas fa-star"> </i></div>

									<div className="divider-custom-line"> </div>
								</div>

								<h4 id="PCGastroSection"><a href="#PCClostDiff">Clostridioides Difficile Infection</a>
								</h4>

								<h4><a href="#PCDiverticulitis">Diverticulitis</a></h4>

								<h4><a href="#PCHpylori">Eradication of Helicobacter Pylori</a></h4>

								<h4><a href="#PCGastroenteritis">Gastroenteritis</a></h4>

								<h4><a href="#PCThrush">Oral Candidiasis (Oral Thrush)</a></h4>

								<h4><a href="#PCThreadwormGastro">Threadworm</a></h4>

								<h4><a href="#PCTravDiar">Travellers Diarrhoea</a></h4>
								<br />
								<div className="text-left border border-info rounded" id="PCGastroClostSection">
									<h2 className="text-center" id="PCClostDiff">Clostridioides Difficile</h2>

									<p><span style={{"color":"#0000AA"}}><strong>Vancomycin 125mg QDS</strong></span> for
										<strong>3 to 10 days</strong> depending on clinical response.</p>

									<p>Refractory disease:</p>

									<p><span style={{"color":"#800080"}}><strong>Metronidazole 400mg TDS</strong></span> for
										<strong>3 to 10 days</strong> depending on clinical response.</p>
								</div>
								<br />
								{/* <!--Diverticulitis--> */}
								<div className="text-left border border-info rounded" id="PCDiverticulitis">
									<h2 className="text-center" id="PCDivertic">Diverticulitis</h2>
									{/* <!--Start accordian diverticulitis--> */}

									<div id="PCaccordionDivertic">
										<div className="card">
											<div className="card-header" id="PCDiverticulit">
												<h5 className="mb-0"><button aria-controls="PCcollapseDivertic"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseDivertic" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCParaDivertic" className="collapse"
												data-parent="#PCaccordionDivertic" id="PCcollapseDivertic">
												<div className="card-body text-left">
													<p><span style={{"color":"#3300cc"}}><strong>Cefalexin 1g TDS
															</strong></span><span style={{"color":"#000000"}}>for 5
															days.</span></p>

													<p><strong><span style={{"color":"#000000"}}><u>Penicillin allergy
																	(anaphylaxis)</u>:</span></strong></p>

													<p><strong><span style={{"color":"#c0392b"}}>Co-trimoxazole 960mg
																BD</span><span style={{"color":"#b22222"}}> </span><span
																style={{"color":"#000000"}}>plus</span><span
																style={{"color":"#b22222"}}><strong> </strong></span><span
																style={{"color":"#c0392b"}}>Metronidazole 400mg
																TDS<strong><strong>
																	</strong></strong></span></strong><span
															style={{"color":"#000000"}}>for 5 days.</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Hpylori--> */}
								<div className="text-left border border-info rounded" id="PCHpyloriSection">
									<h2 className="text-center" id="PCHpylori">Helicobacter Pylori</h2>

									<p>Eradication is beneficial in duodenal ulcers, gastric ulcers and low grade MALT
										lymphoma but not in GORD.</p>

									<p>In non ulcer dyspepsia only 8 % of patients benefit.</p>

									<p>13Ca urea breath test or stool antigen test are the favoured diagnostic tests.
										The tests require a 4 week washout period for antibiotics and a 2 week washout
										period for PPIs.</p>

									<p>PHE guidance recommends that <span
											style={{"color":"rgb(0,128,128)"}}><strong>clarithromycin, metronidazole or
												quinolone</strong></span> <u>should not be used</u> if the
										patient has received these antibiotics <u>in the past year for <strong>any
												infection</strong></u>.</p>

									<p>Treatment duration:</p>

									<p>7 days in total, but 14 days in MALToma </p>
									{/* <!--Start accordian diverticulitis--> */}

									<div id="PCaccordionHpylori">
										<div className="card">
											<div className="card-header" id="PCHpyloriTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseHpyloriTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseHpyloriTreatment" data-toggle="collapse"
														type="button">Treatment</button></h5>
											</div>

											<div aria-labelledby="PCParaHpyloriTreatment" className="collapse"
												data-parent="#PCaccordionHpylori" id="PCcollapseHpyloriTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Full dose PPI</strong>
														</span>(proton pump inhibitor) <span
															style={{"color":"#0000AA"}}><strong>BD</strong></span></p>

													<p><strong>plus </strong></p>

													<p><span style={{"color":"#0000AA"}}><strong>Amoxicillin 1g</strong>
														</span><strong>and</strong> <span
															style={{"color":"#0000AA"}}><strong>Clarithromycin 500mg BD /
																Metronidazole 400mg BD</strong></span></p>

													<p><u><strong>Penicillin allergy and no prior treatment</strong></u>
													</p>

													<p><span style={{"color":"#990065"}}><strong>Full dose PPI
																BD</strong></span></p>

													<p><strong>plus</strong></p>

													<p><span style={{"color":"#990065"}}><strong>Clarithromycin 500mg
																BD</strong></span><span style={{"color":"#000000"}}><strong>
																and </strong></span><span
															style={{"color":"#990065"}}><strong>Metronidazole 400mg
																BD</strong></span></p>

													<p><u><span style={{"color":"#000000"}}><strong>Penicillin allergy &amp;
																	previous treatment/exposure to clarithromycin
																	or levofloxacin</strong></span></u></p>

													<p><span style={{"color":"#00ff00"}}><strong>Full dose
																PPI</strong> <strong>BD</strong></span></p>

													<p><strong>plus </strong></p>

													<p><span style={{"color":"#00ff00"}}><strong>Bismuth subsalicylate 525mg
																QDS</strong></span><span style={{"color":"#800080"}}><strong>
															</strong></span><span style={{"color":"#000000"}}>(this is
															pepto-bismol and is blacklisted in the drug tariff.  If
															treatment is required with this regimen then patient will
															have to buy this over-the-counter. Please inform the
															patient of this)</span></p>

													<p><strong>plus</strong></p>

													<p><strong><span style={{"color":"#00ff00"}}>Metronidazole 400mg
																BD</span><span style={{"color":"#800080"}}> </span>and
															<span style={{"color":"#00ff00"}}>Tetracycline 500mg
																QDS</span></strong></p>

													<p><strong><u>Please note</u></strong></p>

													<p><strong>Full dose PPI BD refers to:</strong></p>

													<p><span style={{"color":"#ff0000"}}><strong>Omeprazole 20mg
																BD</strong></span> or <span
															style={{"color":"#ff0000"}}><strong>Lansoprazole 30mg
																BD</strong></span></p>
												</div>
											</div>

											<div className="card-header" id="PCHpyloriInfo">
												<h5 className="mb-0"><button aria-controls="PCcollapseHpyloriInfo"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseHpyloriInfo" data-toggle="collapse"
														type="button">Further Treatment Information</button></h5>
											</div>

											<div aria-labelledby="PCParaHpyloriInfo" className="collapse"
												data-parent="#PCaccordionHpylori" id="PCcollapseHpyloriInfo">
												<div className="card-body text-left">
													<p><span style={{"color":"rgb(0,0,0)"}}><u><strong>Relapse &amp;
																	previous treatment with metronidazole and
																	clarithromycin</strong></u></span></p>

													<p><span style={{"color":"#008000"}}><strong>Full dose
																PPI</strong></span> (proton pump
														inhibitor) <span
															style={{"color":"#008000"}}><strong>BD</strong></span></p>

													<p><strong>plus</strong></p>

													<p><span style={{"color":"#008000"}}><strong>Amoxicillin 1g
																BD</strong></span></p>

													<p><strong>plus</strong></p>

													<p><strong><span style={{"color":"#008000"}}>Tetracycline 500mg QDS</span>
															or <span style={{"color":"#008000"}}>Levofloxacin 250mg
																BD</span></strong></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Gastroenteritis--> */}
								<div className="text-left border border-info rounded" id="PCGastroentSection">
									<h2 className="text-center" id="PCGastroenteritis">Gastroenteritis</h2>

									<p><strong>Check the patient&rsquo;s travel, food, hospitalisation and antibiotic
											history (CDI).</strong></p>

									<p><span style={{"color":"#ff0000"}}><strong>Fluid replacement is the mainstay of
												treatment</strong></span>. Antibiotic therapy is
										<strong><u>not</u></strong> usually indicated because food -borne associated
										gastroenteritis is usually a self-limiting condition, and treatment only reduces
										diarrhoea by 1&ndash;2 days and can cause antibiotic resistance.</p>

									<p>Initiate antibiotics, on the advice of the microbiologist, if the patient is
										systemically unwell (ongoing pyrexia, diarrhoea, dehydration, and clinical
										toxicity). If the patient has suspected food poisoning or CDI, send a stool
										specimen to the lab. These conditions can then be treated according to the
										results.</p>

									<p>7 days in total, but 14 days in MALToma </p>
								</div>
								<br />
								{/* <!--Thrush--> */}
								<div className="text-left border border-info rounded" id="PCThrushSection">
									<h2 className="text-center" id="PCThrush">Oral Candidiasis (Oral Thrush)</h2>

									<p>Oral candidiasis tends to occur most commonly in babies, people who wear dentures
										or use inhaled corticosteroids and in immunocompromised patients. Antibiotic use
										can also predispose to the development of oral candidiasis.</p>

									<p>If a patient has oral thrush and is otherwise healthy treatment should be given.
									</p>
									{/* <!--Start accordian diverticulitis--> */}

									<div id="PCaccordionThrush">
										<div className="card">
											<div className="card-header" id="PCThrushTreatment">
												<h5 className="mb-0"><button aria-controls="PCcollapseThrushTreatment"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseThrushTreatment" data-toggle="collapse"
														type="button">Topical Treatment</button></h5>
											</div>

											<div aria-labelledby="PCParaThrushTreatment" className="collapse"
												data-parent="#PCaccordionThrush" id="PCcollapseThrushTreatment">
												<div className="card-body text-left">
													<p><span style={{"color":"#0000AA"}}><strong>Miconazole oral gel 2.5ml
																QDS</strong></span>. Treatment should continue for at
														least 7 days after lesions have healed.</p>

													<p>If not suitable or failure to respond,</p>

													<p><span style={{"color":"#800080"}}><strong>Nystatin suspension 1ml
																QDS</strong></span> usually for 7 days (continued for at
														least 48 hours after lesions have healed).</p>

													<p>If the patient is using an inhaled corticosteroid assess inhaler
														technique. Advise the patient to brush teeth or rinse mouth with
														water (do not swallow) after using the inhaled corticosteroid.
														Use of a spacer can reduce the deposition of the drug on
														oromucosal surfaces and use of the lowest maintenance dose also
														reduces likelihood of oral candidiasis. If the patient wears
														dentures give advice on oral hygiene measures to prevent
														recurrence.</p>
												</div>
											</div>

											<div className="card-header" id="PCHpyloriThrushSys">
												<h5 className="mb-0"><button aria-controls="PCcollapseThrushSys"
														aria-expanded="false" className="btn btn-link collapsed"
														data-target="#PCcollapseThrushSys" data-toggle="collapse"
														type="button">Systemic Treatment</button></h5>
											</div>

											<div aria-labelledby="PCParaThrushSys" className="collapse"
												data-parent="#PCaccordionThrush" id="PCcollapseThrushSys">
												<div className="card-body text-left">
													<p>Systemic treatment should be offered if the patient does not
														respond to topical treatment, the infection is extensive or
														severe, or if the patient is immunocompromised.</p>

													<p><span style={{"color":"#b22222"}}><strong>Fluconazole 50mg OD
															</strong></span>for 7 - 14 days maximum.</p>

													<p>Unusually difficult infections may need up to 100mg OD and
														immunocompromised patients may need treatment for longer than 14
														days</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* <!--Threadworm--> */}
								<div className="text-left border border-info rounded" id="PCGastroThreadwormSection">
									<h2 className="text-center" id="PCThreadwormGastro">Threadworm</h2>

									<p>See <a data-dismiss="modal" data-target="#PCParasite" data-toggle="modal"
											href="#PCParasite"> Threadworm </a>section on the Parasites page</p>
								</div>
								<br />
								{/* <!--Diarrhoea--> */}
								<div className="text-left border border-info rounded" id="PCTravDiarrSection">
									<h2 className="text-center" id="PCTravDiar">Traveller&#39;s Diarrhoea</h2>

									<p><strong>Pre-travel</strong>: provide advice on prevention and consider
										vaccination if appropriate. A &lsquo;just in case&rsquo; course of antibiotics
										may be carried by people travelling to remote areas and for people in whom an
										episode of infective diarrhoea could be dangerous. If used in this
										way<strong><span style={{"color":"#0000AA"}}> Azithromycin 500mg OD for 3
												days</span></strong> should be prescribed.</p>

									<p>This should be prescribed as a <u>private prescription</u> and not on an NHS FP10
										prescription. If quinolone resistance is high e.g. South Asia consider bismuth
										subsalicylate (Pepto Bismol) 2 tablets QDS as prophylaxis for 2 days.</p>

									<p>There is also a drug called <span
											style={{"color":"#800080"}}><strong>Rifaximin</strong></span> available which is
										indicated for the treatment of travellers&#39; diarrhoea that is not associated
										with any of:</p>

									<ul>
										<li>Fever</li>
										<li>Bloody diarrhoea</li>
										<li>Eight or more unformed stools in the previous 24 h</li>
										<li>Occult blood or leucocytes in the stool.</li>
									</ul>

									<p>Dose of <span style={{"color":"#800080"}}><strong>Rifaximin is 200mg TDS
												for 3 days</strong></span>. This can also be used as an alternative
										especially in areas of high quinolone resistance.</p>

									<p><strong>Post-travel</strong>: send a stool sample to the lab for culture if the
										patient is systemically unwell or symptoms persist, obtain advice from
										microbiologist before initiating empiric treatment. If the patient is very ill
										admit to hospital.</p>
								</div>
								<br />
								{/* <!--floating icon--> */}
								<a className="float" href="#PCGastroSection"><i
										className="fa fa-arrow-up my-float"> </i> </a><button className="btn btn-primary"
									data-dismiss="modal">Close Window</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>

      );
    }
  }
   
  export default PrimaryGuidelines;
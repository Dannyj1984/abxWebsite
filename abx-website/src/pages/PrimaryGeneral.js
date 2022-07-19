import React, { Component } from "react";
 
class PrimaryGeneral extends Component {
    render() {
      return (
        <div className="container text-center">
            <h3 className="mb-0">General Guidance</h3>
            <div className="row text-center" id="PCGeneralGuidelines">
          <div className="col-xs-8 col-md-12 mb-3">
            <div className="portfolio-item mx-auto" data-target="#PCIntro" data-toggle="modal">
              <div
                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"> </div>
              </div>
              <button
                className="btn btn-primary general">Introduction</button>
            </div>
          </div>

          <div className="col-xs-8 col-md-12 mb-3 ">
            <div className="portfolio-item mx-auto" data-target="#PCAims" data-toggle="modal">
              <div
                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"> </div>
              </div>
              <button className="btn btn-primary general">Aims of the
                Guidelines</button>
            </div>
          </div>

          <div className="col-xs-8 col-md-12 mb-3">
            <div className="portfolio-item mx-auto" data-target="#PCPrinciples" data-toggle="modal">
              <div
                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"> </div>
              </div>
              <button className="btn btn-primary general">Principles
                of Treatment</button>
            </div>
          </div>

          <div className="col-xs-8 col-md-12 mb-3">
            <div className="portfolio-item mx-auto" data-target="#PCReferences" data-toggle="modal">
              <div
                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"> </div>
              </div>
              <button
                className="btn btn-primary general">References</button>
            </div>
          </div>

          <div className="col-xs-8 col-md-12 mb-3">
            <div className="portfolio-item mx-auto" data-target="#PCFurtherReading" data-toggle="modal">
              <div
                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"> </div>
              </div>
              <button className="btn btn-primary general">Further
                Reading</button>
            </div>
          </div>
        </div>

        {/* <!-- Portfolio Modal Gen Guidelines Info-->  */}

	<div aria-hidden="true" aria-labelledby="IntroductionLabel" class="portfolio-modal modal fade" id="PCIntro"
		role="dialog" tabindex="-1">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content"><button aria-label="Close" class="close" data-dismiss="modal"
								type="button"><span aria-hidden="true"><i
										class="fas fa-times"> </i></span></button> 

				<div class="modal-body text-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12">
											{/* <!-- Portfolio Modal - Title-->  */}

								<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="IntroductionLabel">Introduction</h2>
								
										

								<div class="divider-custom">
									<div class="divider-custom-line">
									</div>

									<div class="divider-custom-icon"><i
														class="fas fa-star"> </i></div>

									<div class="divider-custom-line">
									</div>
								</div>
							
											{/* <!-- Portfolio Modal - Text-->   */}

								<p class="mb-5">These guidelines have been produced for General
												Practitioners in Tameside and Glossop Primary Care Trust as a simple
												guide to antimicrobial prescribing. Much of the advice has come from
												Public Health England (PHE) template guidelines and the Clinical
												Knowledge Summaries service (CKS - the successor to Prodigy) which are
												both evidence based. However local antibiotic sensitivity data has been
												used to provide advice specific to the local area at this
												time.</p>
								   

								<p class="mb-5">The Consultant Medical Microbiologists at Tameside
												and Glossop Acute Services NHS Trust are always happy to help general
												practice colleagues and are available during office hours on the numbers
												below.</p>
								   

								<p><strong>Dr H Sacho</strong></p>
								   

								<p><a href="tel:01619224086">0161 922 4086</a> or contact via
												hospital switchboard <a href="tel:01619226000">0161 922
													6000</a></p>
								   

								<p><strong>Dr P F Unsworth</strong></p>
								   

								<p><a href="tel:01619224086">0161 922 6500</a> or contact via
												hospital switchboard <a href="tel:01619226000">0161 922
													6000</a></p>
								 <button class="btn btn-primary" data-dismiss="modal">Close
												Window</button>
							</div>
						</div>
					</div>
				</div>
				  
			</div>
		</div>
	</div>
	 
				{/* <!-- Portfolio Modal Gen Guidelines Aims-->   */}

	<div aria-hidden="true" aria-labelledby="AimsOfGuidelinesLabel" class="portfolio-modal modal fade" id="PCAims"
		role="dialog" tabindex="-1">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content"><button aria-label="Close" class="close" data-dismiss="modal"
								type="button"><span aria-hidden="true"><i
										class="fas fa-times"> </i></span></button>  

				<div class="modal-body text-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12">
											{/* <!-- Portfolio Modal - Title-->   */}

								<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="AimsOfGuidelinesLabel">Aims of the
												Guidelines</h2>
								 
											{/* <!-- Icon Divider-->   */}

								<div class="divider-custom">
									<div class="divider-custom-line"> 
									</div>

									<div class="divider-custom-icon"><i
														class="fas fa-star"> </i></div>

									<div class="divider-custom-line"> 
									</div>
								</div>
								 
											{/* <!-- Portfolio Modal - Text-->   */}

								<ul class="text-left">
									<li>To provide a simple, empiric (best guess) approach to the
													treatment of common infections.</li>
									<li>To promote the safe, effective and economic use of
													antibiotics (and to use antibiotics only if
													indicated).</li>
									<li>To minimise the emergence of bacterial resistance in the
													community and to prevent the development of antibiotic associated
													Clostridium difficile infection (CDI).</li>
								</ul>
								 <button class="btn btn-primary" data-dismiss="modal">Close
												Window</button>
							</div>
						</div>
					</div>
				</div>
				  
			</div>
		</div>
	</div>
	 
				{/* <!-- Portfolio Modal Gen Guidelines Principles-->   */}

	<div aria-hidden="true" aria-labelledby="PrinciplesLabel" class="portfolio-modal modal fade" id="PCPrinciples"
		role="dialog" tabindex="-1">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content"><button aria-label="Close" class="close" data-dismiss="modal"
								type="button"><span aria-hidden="true"><i
										class="fas fa-times"> </i></span></button>  

				<div class="modal-body text-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12">
											{/* <!-- Portfolio Modal - Title-->   */}

								<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="PrinciplesLabel">Principles</h2>
								 
											{/* <!-- Icon Divider-->   */}

								<div class="divider-custom">
									<div class="divider-custom-line"> 
									</div>

									<div class="divider-custom-icon"><i
														class="fas fa-star"> </i></div>

									<div class="divider-custom-line"> 
									</div>
								</div>
								 
											{/* <!-- Portfolio Modal - Text-->   */}

								<div class="text-left">
									<p>This guidance is based on the best available evidence at the
													time and its application must be modified by professional
													judgement.</p>

									<ol>
										<li>Prescribe an antibiotic only when there is likely to be a
														clear clinical benefit, and most notably when there is a
														bacterial infection present.</li>
										<li>A dose and duration of treatment is suggested - however
														patients should be treated on an individual basis if infection
														is severe or recurrent.</li>
										<li>Do not prescribe an antibiotic for simple coughs or colds
														and viral sore throats.</li>
										<li>Do not prescribe antibiotics for chronic lower limb
														ulcers or pressure sores unless there is an associated spreading
														cellulitis, induration of the tissues, abscess formation or
														systemic toxicity with constitutional
														symptoms.</li>
										<li>Limit prescribing over the telephone to exceptional cases
														&ndash; rather clinically assess the case
														first.</li>
										<li>Always prescribe antibiotics generically unless it is
														necessary to state the brand name to ensure the clarity of
														formulation.</li>
										<li>Avoid broad spectrum antibiotics e.g. co-amoxiclav,
														quinolones and cephalosporins, when narrower spectrum
														antibiotics are as effective, as they increase the risk of CDI,
														MRSA and resistant UTIs.</li>
										<li>Limit the use of topical antibiotics to selected
														conditions e.g. Impetigo, fungal skin infections, acne, herpes
														labialis, especially if they are also available as a systemic
														preparation.</li>
										<li>In pregnancy avoid tetracyclines, aminoglycosides,
														quinolones, and high dose metronidazole. Short term use of
														trimethoprim (theoretical risk in first trimester in patients
														with a poor diet, as it is a folate antagonist) or
														nitrofurantoin (at term, theoretical risk of neonatal
														haemolysis) is unlikely to cause a problem to the foetus. For
														empiric treatment of UTIs in pregnancy see later in the
														guidelines.</li>
										<li>Clarithromycin is the macrolide of choice due to it being
														better tolerated and a lower frequency of
														administration.</li>
										<li>Alternatives are usually given in these guidelines for
														use in penicillin allergy.</li>
										<li>If empiric treatment has failed or special circumstances
														exist contact the Consultant Medical Microbiologists at Tameside
														General Hospital for advice. See page 3 for contact
														details.</li>
										<li>If samples are sent to the laboratory they should be
														collected before antibiotic therapy is started. If the patient
														is already on antibiotics please give a clear drug history on
														the request form.</li>
										<li>Where possible antibiotic treatment should be selected or
														changed based on microbiologic culture and sensitivity results
														with a preference for the narrowest spectrum antibiotic where
														appropriate.</li>
										<li>The laboratory usually reports on antibiotic
														sensitivities for organisms which are thought to be clinically
														significant, but the clinical picture must always be taken into
														account before deciding if and how to treat. Treat the patient
														and not the microbiology result! If you have any queries please
														speak to either of the Medical
														Microbiologists.</li>
										<li>Prescribing of long-term antibiotic prophylaxis is not
														encouraged; however it is accepted that a select number of
														patients, such as COPD or bronchiectasis patients, may benefit
														from this. Long-term antibiotic prophylaxis should only be
														commenced by a hospital consultant and the patient should be
														closely monitored with regular follow ups.
										</li>
									</ol>

									<p><strong>Note to Prescribers about duration of
														treatment:</strong></p>

									<p>In general most antibiotic treatments should not exceed 5
													days, and treatment durations for 3 or 4 days may be entirely
													adequate. However it must be emphasized that the most important
													determinant for the duration of antibiotic treatment is the clinical
													response of the patient to therapy. It is vital that patients are
													educated about their antibiotic treatment and in particular
													recognising the signs and symptoms of their infection improving. For
													uncomplicated or infections requiring short duration of treatment
													with antibiotics, patients should be advised that, although they
													have been prescribed antibiotics for e .g. 5 days, they c ould stop
													taking antibiotics e.g. after 3 days if they feel that their
													symptoms have improved and they are getting better; however, if they
													are unsure they should consult their doctor. For complicated or
													infections requiring longer duration of treatment, patients should
													be advised to complete the prescribed course as advised and
													explained by their doctor.</p>
								</div>
								 <button class="btn btn-primary" data-dismiss="modal"><i
													class="fas fa-times fa-fw"> </i> Close
												Window</button>
							</div>
						</div>
					</div>
				</div>
				  
			</div>
		</div>
	</div>
	 
				{/* <!-- Portfolio Modal Gen Guidelines References-->   */}

	<div aria-hidden="true" aria-labelledby="ReferencesLabel" class="portfolio-modal modal fade" id="PCReferences"
		role="dialog" tabindex="-1">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content"><button aria-label="Close" class="close" data-dismiss="modal"
								type="button"><span aria-hidden="true"><i
										class="fas fa-times"> </i></span></button>  

				<div class="modal-body text-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12">
											{/* <!-- Portfolio Modal - Title-->   */}

								<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="ReferencesLabel">References</h2>
								 
											{/* <!-- Icon Divider-->   */}

								<div class="divider-custom">
									<div class="divider-custom-line"> 
									</div>

									<div class="divider-custom-icon"><i
														class="fas fa-star"> </i></div>

									<div class="divider-custom-line"> 
									</div>
								</div>
								 
											{/* <!-- Portfolio Modal - Text-->   */}

								<ol class="text-left text">
									<li>PHE Management of infection guidance for primary care for
													consultation and local adaptation October 2014
													https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/443046/230415_PHE_Primary_Care_guidance_07_07_15_for_Gateway.pdf
									</li>
									<li>CKS (Evidence Series) Clinical Knowledge Summaries.
													http://cks.nice.org.uk/#?char=A (accessed August
													2015)</li>
									<li>BNF Sept 2014 (no 68) and cBNF 2014 -15
													www.bnf.org/bnf</li>
									<li>Electronic medicines Compendium
													www.emc.medicines.org.uk</li>
									<li>Department of Health. Seasonal flu plan Winter 2011/12.
													Published May 2011.
													www.dh.gov.uk/prod_consum_dh/groups/dh_digitalassets/documents/digitalasset/dh_127088.pdf
									</li>
									<li>National Institute for Health and Clinical Excellence.
													Amantadine, oseltamivir and zanamivir for the treatment of influenza
													(review of NICE technology appraisal guidance 58). Issued Feb
													2009.</li>
									<li>National Institute for Health and Clinical Excellence.
													Oseltamivir, amantadine (review) and zanamivir for the prophylaxis
													of influenza. Issued Sept 2008.</li>
									<li>SIGN (2010) Management of sore throat and indications f or
													tonsillectomy www.sign.ac.uk</li>
									<li>MeReC (2006) Bulletin Volume 17 Number 3, The management of
													common infections in primary care
													www.npc.co.uk</li>
									<li>Rovers MM, Glasziou P, Appelman CL, et al. Antibiotics for
													acute otitis media: a meta-analysis with individual patient data.
													Lancet 2006; 368:1429 -1435.</li>
									<li>NICE Guidance (2010) Chronic Obstructive Pulmonary Disease
													www.nice.org.uk</li>
									<li>BTS (updated 2004) Guidelines for the Management of Community
													Acquired Pneumonia in Adults
													www.Brit-thoracic.org.uk</li>
									<li>HPA (2011) Guidance for public health management of
													meningococcal disease in the UK www.hpa.org.uk
									</li>
									<li>SIGN (2006) Management of suspected bacterial urinary tract
													infection in adults www.sign.ac.uk</li>
									<li>HPA (last reviewed 2011) Diagnosis for UTI quick reference
													Guide for Primary Care www.hpa.org.uk</li>
									<li>NICE (2007) urinary tract infection in children
													www.nice.org.uk</li>
									<li>HPA (last reviewed 2008) Diagnosis of H.pylori Quick
													Reference Guide for Primary Care
													www.hpa.org.uk</li>
									<li>NICE (2004) CG17 Dyspepsia: managing dyspepsia in adults in
													primary care. www.nice.org.uk</li>
									<li>British Association for Sexual Health and HIV (BASHH)
													Clinical Effectiveness Group Guidelines.
													www.bashh.org</li>
									<li>NICE. Antibiotic prescribing &ndash; especially the broad
													spectrum antibiotics January 2015.</li>
									<li>http://www.guysandstthomas.nhs.uk/resources/about-us/board-minutes/2014-board-papers/april/Board/cpe-briefing.pdf
									</li>
								</ol>
								 <button class="btn btn-primary" data-dismiss="modal"><i
													class="fas fa-times fa-fw"> </i>Close
												Window</button>
							</div>
						</div>
					</div>
				</div>
				  
			</div>
		</div>
	</div>
	 
				{/* <!-- Portfolio Modal Gen Guidelines Further Reading-->   */}

	<div aria-hidden="true" aria-labelledby="furtherReadingLabel" class="portfolio-modal modal fade"
		id="PCFurtherReading" role="dialog" tabindex="-1">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content"><button aria-label="Close" class="close" data-dismiss="modal"
								type="button"><span aria-hidden="true"> </span></button>  

				<div class="modal-body text-center">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-12">
											{/* <!-- Portfolio Modal - Title-->   */}

								<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"
									id="furtherReadingLabel">Further Reading
								</h2>
								 
											{/* <!-- Icon Divider-->   */}

								<div class="divider-custom">
									<div class="divider-custom-line"> 
									</div>

									<div class="divider-custom-icon"><i
														class="fas fa-star"> </i></div>

									<div class="divider-custom-line"> 
									</div>
								</div>
								 
											{/* <!-- Portfolio Modal - Text-->   */}

								<div class="text-left">
									<p>Department of Health. Resistance to Antibiotics and other
													Antimicrobial agents; action for the NHS following the
													Government&rsquo;s response to the House of Lords Science and
													Technology Select Committee report. Department of Health; 1999.
													(Health Service Circular: HSC (99) 049)</p>

									<p>Department of Health. Hospital Pharmacy initiative for
													promoting prudent use of antibiotics in hospitals. London.
													Department of Health: 2003 (Professional letter. Chief Medical
													Officer: PLCMO (2003) 3)</p>

									<p>Journal of hospital infection (2006) 63S, S1eS 44 Guidelines
													for the control and prevention of methicillin resistant
													Staphylococcus aureus (MRSA) in healthcare
													facilities.</p>

									<p>JE Coia a, CG Duckworth b, DI Edwards c, M Farrington d, C Fry
													e, H Humphreys f *, C Mallaghan g, D R Tucker h, for the Joint
													Working Party of the British Society of Antimicrobial Chemotherapy,
													the Hospital Infection Society and the Infection Control Nurses
													Association.</p>

									<p>Dilip Nathwani (DN) (Chair), Marina Morgan (MM), Bob Masterton
													(RGM), Matthew S Dryden (MD), Barry D Cookson (BDC), Gary French
													(GF), Deidre Lewis (DL). Working Party Draft
													2007</p>

									<p>Diagnosis and Principles of Management of MRSA Infections
													Presenting in The Community: Guidelines for UK Practice Working
													Party * On Behalf Of The British Society For Antimicrobial
													Chemotherapy (Bsac).</p>

									<p>Health Protection Agency, interim guidance on diagnosis and
													management of PVL - associated Staphylococcal infections in the UK,
													13th march 2007.</p>

									<p>Clostridium difficile infection: How to deal with the problem.
													Guidance from Department of Health/HPA 2008.
									</p>

									<p>International Infection Control Council Best Infection Control
													Practices for patients with extended spectrum beta-Lactamase
													Enterobacteriaceae C Friedman, S Callery, Ajeans, P Piaskowski, L
													Scott (representing the International Infection Control Council) and
													members of the Best Practices Experts Panel and
													Reviewer.</p>

									<p>ANTIMICROBIAL STEWARDSHIP: &ldquo;START SMART&ndash;THEN
													FOCUS.&rdquo; Guidance from Department of Health Advisory Committee
													on Antimicrobial Resistance and Healthcare Associated Infection
													(ARHAI) 2011</p>
								</div>
								 <button class="btn btn-primary" data-dismiss="modal"><i
													class="fas fa-times fa-fw"> </i> Close
												Window</button>
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
   
  export default PrimaryGeneral;
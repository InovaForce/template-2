import React from 'react';
import "./family.scss"



const Family = () => {
  return (
<div className="family-body">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="family-title">
						<h2>Family</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12">
				
				
					<div className="family-image">
						<div className="family-img">
							<img className="img-fluid" src="images/family-01.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mr. Mehmet Genç </h4>
							<p> Bride's Father </p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="family-image">
						
						<div className="family-img">
							<img className="img-fluid" src="images/family-02.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mrs. Genç </h4>
							<p> Bride's Mother </p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="family-image">
						<div className="family-img">
							<img className="img-fluid" src="images/family-03.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mr. Cahit Ata </h4>
							<p>Bride's Brother</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="family-image">
						<div className="family-img">
							<img className="img-fluid" src="images/family-01.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mr. Demir </h4>
							<p> Groom's Father </p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="family-image">
						<div className="family-img">
							<img className="img-fluid" src="images/family-02.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mrs.Şule Demir </h4>
							<p>Groom's Mother </p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="family-image">
						<div className="family-img">
							<img className="img-fluid" src="images/family-04.jpg" alt="" />
						</div>
						<div className="family-info">
							<h4>Mrs.Eda Sarıkaya </h4>
							<p>Groom's Sister </p>
						</div>
					</div>
				</div>

			</div>
		</div>
		</div>
  )
}

export default Family

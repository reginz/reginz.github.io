import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/TimeLine.css';

class TimeLine extends Component {
    render() {
        return (
         <div>
             <section id="cd-timeline" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
				<h2>2021 Q1</h2>

				<p>Foundation of the company.<br></br>
R&D studies.<br></br>
Product design.

</p>
        
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 			<div class="cd-timeline-content">
				<h2>2021 Q2</h2>
				<p>Initiating developement of the agent as a service modules.<br></br>
Explaining our ideas about the future of AI through our blog.<br></br>
Forming our community.<br></br>

</p>
				
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div> 			<div class="cd-timeline-content">
				<h2> 2021 Q3</h2>
				<p>API & integration of our service.<br></br>
Releasing closed beta.</p>
			
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 			<div class="cd-timeline-content">
				<h2>2021 Q4</h2>
				<p>Relasing closed beta.<br></br>
                Futher improvements through consumer feedback.</p>
		
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
			</div> 

			<div class="cd-timeline-content">
				<h2>2022 Q1</h2>
				<p>Shipping our service.

</p>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 			<div class="cd-timeline-content">
				<h2>2022 Q2</h2>
				<p>Developement of crowd-sourced data collection app.

</p>
				
			</div> 
		</div> 
        <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 			<div class="cd-timeline-content">
				<h2>🌍 Near Future</h2>
				<p>More details to be announced soon...

</p>
				
			</div> 
		</div> 
        <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> 			<div class="cd-timeline-content">
				<h2>🚀 Long Term</h2>
				<p>Reaserching context free unsupervised model transfer.<br></br>
Augumenting human-computer interface with agent architecture.

</p>
				
			</div> 
		</div> 
        
	</section>  
     </div>
       
        );
    }
}

export default TimeLine;

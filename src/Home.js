import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="title">
          <div className="text">This tool is used to document Job Hazards</div>
        </h3>
        <div className="main-page">
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col">
                <h4>What is a Job Hazard Analysis (JHA)?</h4>
                <br />
                <ui className="list-unstyled">
                  <p>
                    A JHA is a method for identifying and evaluating hazards
                    associated with tasks (steps) with a specific job or
                    activity and eliminating or mitigating them prior to
                    conducting work.
                  </p>
                </ui>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>Why conduct a JHA?</h4>
                <ui className="list-unstyled">
                  <p>
                    A JHA can prevent work-related injuries or illnesses by
                    eliminating or controlling identified hazards. It is a means
                    to ensure that workers have the training, equipment, and
                    supplies to do their jobs safely.
                  </p>
                </ui>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>How do I conduct a JHA?</h4>
                <ui className="list-unstyled">
                  <p>
                    It is best to involve workers who do or will do the jobs
                    being analyzed. Observe a worker perform the job or activity
                    at the location where it is normally done. A JHA involves
                    doing the following:
                  </p>
                  <ul>
                    <li>Select the job/activity to be analyzed. . </li>
                    <li>Break the job/activity down into a series of tasks</li>

                    <li>
                      Determine preventive measures to overcome these hazards.
                    </li>
                  </ul>
                </ui>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

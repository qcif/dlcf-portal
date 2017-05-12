/**
* Form related configuration
*/
module.exports.form = {
  defaultForm: "default-1.0",
  "default-1.0": {
    fields: [
      {
        class: "Container",
        compClass: "TabContainerComponent",
        definition: {
          fields: [
            {
              class : "Container",
              definition: {
                id: "intro",
                label : "Introduction",
                active: true,
                fields: [
                  {
                    class: 'Container',
                    compClass: 'TextBlockComponent',
                    definition: {
                      value: 'Welcome to the Data Management Plan form',
                      type: 'h3'
                    }
                  },
                  {
                    class: 'Container',
                    compClass: 'TextBlockComponent',
                    definition: {
                      value: 'Some text to introduce the user to the form would go here.'
                    }
                  }
                ]
              }
            },
            {
              class : "Container",
              definition: {
                id: "overview",
                label : "Overview",
                fields: [
                 {
                   class: 'TextField',
                   definition: {
                     name: 'projectTitle',
                     label: 'Project Title',
                     type: 'text',
                     required: true
                   }
                 },
                 {
                   class: 'TextArea',
                   definition: {
                     name: 'description',
                     label: 'Project Description',
                     rows: 10,
                     cols: 10
                   }
                 },
                 {
                   class: 'DateTime',
                   definition: {
                     name: "startDate",
                     label: "Start Date",
                     datePickerOpts: {format: 'mm/dd/yyyy', icon: 'fa fa-calendar', clearBtn: true},
                     onChange: {setStartDate: ['endDate']}
                   }
                 },
                 {
                   class: 'DateTime',
                   definition: {
                     name: "endDate",
                     label: "End Date",
                     datePickerOpts: {format: 'mm/dd/yyyy', icon: 'fa fa-calendar', clearBtn: true}
                   }
                 },
                 {
                  class: 'RepeatableContainer',
                  compClass: 'RepeatableVocabComponent',
                  definition: {
                    label: "Field of Research Codes",
                    name: "anzsrcFor",
                    addButtonText: "Add",
                    removeButtonText: "Remove",
                    forceClone: ['sourceData','completerService'],
                    fields: [
                      {
                        class: 'VocabField',
                        definition: {
                          vocabId: 'anzsrc-for'
                        }
                      }
                    ]
                  }
                 }
                ]
              }
            },
            {
              class : "Container",
              definition: {
                id: "contributors",
                label : "Contributors",
                fields: [
                  {
                   class: 'RepeatableContainer',
                   compClass: 'RepeatableContributorComponent',
                   definition: {
                     name: "contributors",
                     addButtonText: "Add",
                     removeButtonText: "Remove",
                     skipClone: ['showHeader'],
                     fields: [
                       {
                         class: 'ContributorField',
                         showHeader:true,
                         definition: {
                           roles: [
                             "Chief Investigator",
                             "Data manager",
                             "Collaborators",
                             "Supervisor"
                           ],
                           validationMessages: {
                             required: {
                               email: 'Email required',
                               name: 'Name required',
                               role: 'Select a role'
                             },
                             invalid: {
                               email: 'Invalid email format'
                             }
                           }
                         }
                       }
                     ]
                   }
                  }
                ]
              }
            },
            {
              class : "Container",
              definition: {
                id: "submit",
                label : "Submit",
                fields: [
                  {
                    class: 'Container',
                    compClass: 'TextBlockComponent',
                    definition: {
                      value: "Some text explaining to the user that once they've completed the form and are satisfied with the values, they can push the record to the \"active\" state which represents that the project is currently under way and that a RAID will be generated for the activity."
                    }
                  },
                  {
                    class: 'Container',
                    compClass: 'TextBlockComponent',
                    definition: {
                      value: "With future service provisioning functionality, some text explaining that process could go in here as well."
                    }
                  },
                  {
                    class: 'SimpleButton',
                    definition: {
                      label: "Make the plan active",
                      cssClasses: "btn btn-primary",
                      onClick_RootFn: 'makeActive'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

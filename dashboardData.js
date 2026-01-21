const dashboardData = {
    "B": {
        "name": "Recommended",
        "description": "Excludes 6 severely problematic turnarounds",
        "overall": {
            "totalTurnarounds": 111,
            "totalDataPoints": 1813,
            "pctWithin1min": 77.4,
            "pctWithin2min": 85.4,
            "pctWithin5min": 91.5
        },
        "filters": {
            "terminals": [
                "Apron6",
                "CARGO",
                "Cargo",
                "Far East",
                "T1",
                "T3",
                "T4",
                "T5"
            ],
            "terminalStands": {
                "T1": [
                    "ST104",
                    "ST105",
                    "ST106",
                    "ST108"
                ],
                "T3": [
                    "ST303",
                    "ST305",
                    "ST306"
                ],
                "T4": [
                    "ST401",
                    "ST403",
                    "ST404",
                    "ST406M",
                    "ST407"
                ],
                "T5": [
                    "511"
                ],
                "Far East": [
                    "E20",
                    "E20L",
                    "E21R",
                    "E22L",
                    "E22R"
                ],
                "CARGO": [
                    "C2",
                    "C3",
                    "C4",
                    "C5",
                    "C6"
                ],
                "Cargo": [
                    "C2C"
                ],
                "Apron6": [
                    "E20L",
                    "E21R",
                    "ST506R"
                ]
            },
            "timeSlots": [
                "Early Morning",
                "Morning",
                "Afternoon",
                "Evening",
                "Night"
            ],
            "durations": [
                "Short",
                "Medium",
                "Long",
                "Unknown"
            ]
        },
        "events": [
            {
                "event": "Disembark Bus Count",
                "count": 8,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "CARGO": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Afternoon": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 2,
                        "pctWithin1min": 100
                    },
                    "Unknown": {
                        "count": 6,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Embark Bus Count",
                "count": 10,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Apron6": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Evening": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 10,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Total Bus Count",
                "count": 8,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Apron6": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Afternoon": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 8,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Medical Lift connected - End",
                "count": 2,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Medical Lift connected - Start",
                "count": 2,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Windsheild Cleaning connected - Start",
                "count": 3,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Water Truck connected - Start",
                "count": 4,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 100
                    },
                    "CARGO": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Stairs AFT connected - End",
                "count": 3,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Stairs AFT connected - Start",
                "count": 3,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "TA Start Time",
                "count": 63,
                "pctWithin1min": 95.2,
                "pctWithin2min": 95.2,
                "byTerminal": {
                    "T1": {
                        "count": 18,
                        "pctWithin1min": 100
                    },
                    "T3": {
                        "count": 24,
                        "pctWithin1min": 100
                    },
                    "T4": {
                        "count": 18,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 20,
                        "pctWithin1min": 95
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    },
                    "Evening": {
                        "count": 12,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 13,
                        "pctWithin1min": 92.3
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 32,
                        "pctWithin1min": 96.9
                    },
                    "Long": {
                        "count": 6,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Unknown": {
                        "count": 20,
                        "pctWithin1min": 90
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Pushback Tug Connected - End",
                "count": 68,
                "pctWithin1min": 94.1,
                "pctWithin2min": 97.1,
                "byTerminal": {
                    "T1": {
                        "count": 17,
                        "pctWithin1min": 100
                    },
                    "T3": {
                        "count": 14,
                        "pctWithin1min": 92.9
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 88.2
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 20,
                        "pctWithin1min": 95
                    },
                    "Afternoon": {
                        "count": 16,
                        "pctWithin1min": 93.8
                    },
                    "Evening": {
                        "count": 14,
                        "pctWithin1min": 92.9
                    },
                    "Night": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 36,
                        "pctWithin1min": 97.2
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    },
                    "Unknown": {
                        "count": 19,
                        "pctWithin1min": 89.5
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "TA End Time",
                "count": 60,
                "pctWithin1min": 93.3,
                "pctWithin2min": 98.3,
                "byTerminal": {
                    "T1": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "T3": {
                        "count": 22,
                        "pctWithin1min": 95.5
                    },
                    "T4": {
                        "count": 18,
                        "pctWithin1min": 88.9
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 19,
                        "pctWithin1min": 94.7
                    },
                    "Afternoon": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "Evening": {
                        "count": 11,
                        "pctWithin1min": 90.9
                    },
                    "Night": {
                        "count": 13,
                        "pctWithin1min": 92.3
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 31,
                        "pctWithin1min": 96.8
                    },
                    "Long": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Unknown": {
                        "count": 19,
                        "pctWithin1min": 84.2
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Jet bridge FWD - End",
                "count": 71,
                "pctWithin1min": 93,
                "pctWithin2min": 94.4,
                "byTerminal": {
                    "T1": {
                        "count": 13,
                        "pctWithin1min": 92.3
                    },
                    "T3": {
                        "count": 12,
                        "pctWithin1min": 91.7
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    },
                    "Evening": {
                        "count": 16,
                        "pctWithin1min": 93.8
                    },
                    "Night": {
                        "count": 19,
                        "pctWithin1min": 89.5
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 33,
                        "pctWithin1min": 93.9
                    },
                    "Long": {
                        "count": 8,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 100
                    },
                    "Unknown": {
                        "count": 24,
                        "pctWithin1min": 87.5
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Jet bridge FWD - Start",
                "count": 71,
                "pctWithin1min": 93,
                "pctWithin2min": 98.6,
                "byTerminal": {
                    "T1": {
                        "count": 13,
                        "pctWithin1min": 92.3
                    },
                    "T3": {
                        "count": 12,
                        "pctWithin1min": 100
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 88.2
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 88.9
                    },
                    "Evening": {
                        "count": 16,
                        "pctWithin1min": 93.8
                    },
                    "Night": {
                        "count": 19,
                        "pctWithin1min": 94.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 33,
                        "pctWithin1min": 90.9
                    },
                    "Long": {
                        "count": 8,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 100
                    },
                    "Unknown": {
                        "count": 24,
                        "pctWithin1min": 91.7
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "ACU connected - Start",
                "count": 14,
                "pctWithin1min": 92.9,
                "pctWithin2min": 92.9,
                "byTerminal": {
                    "T4": {
                        "count": 10,
                        "pctWithin1min": 90
                    },
                    "T3": {
                        "count": 4,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 5,
                        "pctWithin1min": 100
                    },
                    "Afternoon": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "Unknown": {
                        "count": 5,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Passenger Door Open - End",
                "count": 102,
                "pctWithin1min": 92.2,
                "pctWithin2min": 93.1,
                "byTerminal": {
                    "T1": {
                        "count": 18,
                        "pctWithin1min": 94.4
                    },
                    "T3": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 91.7
                    },
                    "T5": {
                        "count": 8,
                        "pctWithin1min": 87.5
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 28,
                        "pctWithin1min": 92.9
                    },
                    "Afternoon": {
                        "count": 26,
                        "pctWithin1min": 96.2
                    },
                    "Evening": {
                        "count": 20,
                        "pctWithin1min": 90
                    },
                    "Night": {
                        "count": 22,
                        "pctWithin1min": 86.4
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 42,
                        "pctWithin1min": 95.2
                    },
                    "Long": {
                        "count": 10,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "Unknown": {
                        "count": 41,
                        "pctWithin1min": 87.8
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Passenger Door Open - Start",
                "count": 101,
                "pctWithin1min": 92.1,
                "pctWithin2min": 94.1,
                "byTerminal": {
                    "T1": {
                        "count": 18,
                        "pctWithin1min": 88.9
                    },
                    "T3": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 88.2
                    },
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 91.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 28,
                        "pctWithin1min": 92.9
                    },
                    "Afternoon": {
                        "count": 25,
                        "pctWithin1min": 96
                    },
                    "Evening": {
                        "count": 20,
                        "pctWithin1min": 85
                    },
                    "Night": {
                        "count": 22,
                        "pctWithin1min": 90.9
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 42,
                        "pctWithin1min": 92.9
                    },
                    "Long": {
                        "count": 10,
                        "pctWithin1min": 90
                    },
                    "Short": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "Unknown": {
                        "count": 40,
                        "pctWithin1min": 92.5
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Compartment Door - Start",
                "count": 50,
                "pctWithin1min": 90,
                "pctWithin2min": 94,
                "byTerminal": {
                    "T1": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "T3": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "T4": {
                        "count": 12,
                        "pctWithin1min": 91.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 17,
                        "pctWithin1min": 94.1
                    },
                    "Afternoon": {
                        "count": 13,
                        "pctWithin1min": 84.6
                    },
                    "Evening": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "Night": {
                        "count": 11,
                        "pctWithin1min": 90.9
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 23,
                        "pctWithin1min": 91.3
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 4,
                        "pctWithin1min": 75
                    },
                    "Unknown": {
                        "count": 16,
                        "pctWithin1min": 87.5
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Bus Passenger Disembarkment - Start",
                "count": 10,
                "pctWithin1min": 90,
                "pctWithin2min": 90,
                "byTerminal": {
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Apron6": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Evening": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 10,
                        "pctWithin1min": 90
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Bus Passenger Embark - Start",
                "count": 17,
                "pctWithin1min": 88.2,
                "pctWithin2min": 88.2,
                "byTerminal": {
                    "Far East": {
                        "count": 8,
                        "pctWithin1min": 87.5
                    },
                    "Apron6": {
                        "count": 4,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 9,
                        "pctWithin1min": 88.9
                    },
                    "Evening": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 17,
                        "pctWithin1min": 88.2
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Container Offload AFT - Start",
                "count": 14,
                "pctWithin1min": 85.7,
                "pctWithin2min": 85.7,
                "byTerminal": {
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "Cargo": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Early Morning": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 14,
                        "pctWithin1min": 85.7
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Pushback Tug connected - Start",
                "count": 70,
                "pctWithin1min": 85.7,
                "pctWithin2min": 91.4,
                "byTerminal": {
                    "T1": {
                        "count": 17,
                        "pctWithin1min": 82.4
                    },
                    "T3": {
                        "count": 15,
                        "pctWithin1min": 86.7
                    },
                    "T4": {
                        "count": 17,
                        "pctWithin1min": 88.2
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 20,
                        "pctWithin1min": 90
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 88.9
                    },
                    "Evening": {
                        "count": 14,
                        "pctWithin1min": 78.6
                    },
                    "Night": {
                        "count": 18,
                        "pctWithin1min": 83.3
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 36,
                        "pctWithin1min": 86.1
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 100
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 21,
                        "pctWithin1min": 85.7
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "ACU Connected - End",
                "count": 14,
                "pctWithin1min": 85.7,
                "pctWithin2min": 92.9,
                "byTerminal": {
                    "T4": {
                        "count": 10,
                        "pctWithin1min": 80
                    },
                    "T3": {
                        "count": 4,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Afternoon": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    },
                    "Unknown": {
                        "count": 5,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Conveyer Belt Bulk connected - End",
                "count": 6,
                "pctWithin1min": 83.3,
                "pctWithin2min": 83.3,
                "byTerminal": {
                    "CARGO": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Early Morning": {
                        "count": 4,
                        "pctWithin1min": 75
                    },
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Cargo Door FWD - Start",
                "count": 55,
                "pctWithin1min": 81.8,
                "pctWithin2min": 87.3,
                "byTerminal": {
                    "T4": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 83.3
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 18,
                        "pctWithin1min": 83.3
                    },
                    "Afternoon": {
                        "count": 13,
                        "pctWithin1min": 76.9
                    },
                    "Evening": {
                        "count": 10,
                        "pctWithin1min": 80
                    },
                    "Night": {
                        "count": 14,
                        "pctWithin1min": 85.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 21,
                        "pctWithin1min": 85.7
                    },
                    "Long": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Unknown": {
                        "count": 29,
                        "pctWithin1min": 79.3
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Stairs FWD connected - End",
                "count": 26,
                "pctWithin1min": 80.8,
                "pctWithin2min": 84.6,
                "byTerminal": {
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 75
                    },
                    "Apron6": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 16,
                        "pctWithin1min": 81.2
                    },
                    "Evening": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 26,
                        "pctWithin1min": 80.8
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Fueling connected - End",
                "count": 15,
                "pctWithin1min": 80,
                "pctWithin2min": 86.7,
                "byTerminal": {
                    "T4": {
                        "count": 11,
                        "pctWithin1min": 81.8
                    },
                    "Far East": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 4,
                        "pctWithin1min": 75
                    },
                    "Afternoon": {
                        "count": 4,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 10,
                        "pctWithin1min": 80
                    },
                    "Unknown": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Compartment Door - End",
                "count": 50,
                "pctWithin1min": 80,
                "pctWithin2min": 86,
                "byTerminal": {
                    "T1": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    },
                    "T3": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    },
                    "T4": {
                        "count": 12,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 17,
                        "pctWithin1min": 82.4
                    },
                    "Afternoon": {
                        "count": 13,
                        "pctWithin1min": 76.9
                    },
                    "Evening": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    },
                    "Night": {
                        "count": 11,
                        "pctWithin1min": 81.8
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 23,
                        "pctWithin1min": 82.6
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "Short": {
                        "count": 4,
                        "pctWithin1min": 50
                    },
                    "Unknown": {
                        "count": 16,
                        "pctWithin1min": 81.2
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Conveyer Belt AFT connected - Start",
                "count": 40,
                "pctWithin1min": 80,
                "pctWithin2min": 92.5,
                "byTerminal": {
                    "Far East": {
                        "count": 10,
                        "pctWithin1min": 70
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 15,
                        "pctWithin1min": 73.3
                    },
                    "Afternoon": {
                        "count": 10,
                        "pctWithin1min": 80
                    },
                    "Evening": {
                        "count": 6,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 34,
                        "pctWithin1min": 82.4
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "High loader FWD connected",
                "count": 26,
                "pctWithin1min": 76.9,
                "pctWithin2min": 84.6,
                "byTerminal": {
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 75
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 10,
                        "pctWithin1min": 70
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 87.5
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 26,
                        "pctWithin1min": 76.9
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Water Truck connected - End",
                "count": 4,
                "pctWithin1min": 75,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 50
                    },
                    "CARGO": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Morning": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Cargo Door FWD - End",
                "count": 56,
                "pctWithin1min": 73.2,
                "pctWithin2min": 78.6,
                "byTerminal": {
                    "T4": {
                        "count": 7,
                        "pctWithin1min": 57.1
                    },
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 66.7
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 18,
                        "pctWithin1min": 72.2
                    },
                    "Afternoon": {
                        "count": 14,
                        "pctWithin1min": 71.4
                    },
                    "Evening": {
                        "count": 10,
                        "pctWithin1min": 70
                    },
                    "Night": {
                        "count": 14,
                        "pctWithin1min": 78.6
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 21,
                        "pctWithin1min": 76.2
                    },
                    "Long": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Unknown": {
                        "count": 30,
                        "pctWithin1min": 73.3
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "High loader FWD connected - End",
                "count": 26,
                "pctWithin1min": 73.1,
                "pctWithin2min": 80.8,
                "byTerminal": {
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 66.7
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 10,
                        "pctWithin1min": 60
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 87.5
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 26,
                        "pctWithin1min": 73.1
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Baggage Offload AFT - Start",
                "count": 22,
                "pctWithin1min": 72.7,
                "pctWithin2min": 90.9,
                "byTerminal": {
                    "T4": {
                        "count": 4,
                        "pctWithin1min": 50
                    },
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    },
                    "Afternoon": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Night": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    },
                    "Unknown": {
                        "count": 14,
                        "pctWithin1min": 78.6
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "29 Jan"
            },
            {
                "event": "Bus Passenger Disembarkment - End",
                "count": 11,
                "pctWithin1min": 72.7,
                "pctWithin2min": 72.7,
                "byTerminal": {
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Apron6": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Evening": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 11,
                        "pctWithin1min": 72.7
                    }
                },
                "targetAccuracy": "78%",
                "targetDate": "29 Feb"
            },
            {
                "event": "Baggage Onload FWD - End",
                "count": 11,
                "pctWithin1min": 72.7,
                "pctWithin2min": 81.8,
                "byTerminal": {
                    "T4": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Far East": {
                        "count": 3,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 3,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 60
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Unknown": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "High loader AFT connected",
                "count": 18,
                "pctWithin1min": 72.2,
                "pctWithin2min": 77.8,
                "byTerminal": {
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 18,
                        "pctWithin1min": 72.2
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Jet bridge AFT - End",
                "count": 7,
                "pctWithin1min": 71.4,
                "pctWithin2min": 71.4,
                "byTerminal": {
                    "T4": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 60
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "targetAccuracy": "90%",
                "targetDate": "12 Mar"
            },
            {
                "event": "Stairs FWD connected - Start",
                "count": 28,
                "pctWithin1min": 71.4,
                "pctWithin2min": 92.9,
                "byTerminal": {
                    "Far East": {
                        "count": 12,
                        "pctWithin1min": 66.7
                    },
                    "Apron6": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 17,
                        "pctWithin1min": 70.6
                    },
                    "Evening": {
                        "count": 5,
                        "pctWithin1min": 60
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 28,
                        "pctWithin1min": 71.4
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Conveyer Belt AFT connected - End",
                "count": 35,
                "pctWithin1min": 71.4,
                "pctWithin2min": 80,
                "byTerminal": {
                    "Far East": {
                        "count": 10,
                        "pctWithin1min": 60
                    },
                    "CARGO": {
                        "count": 6,
                        "pctWithin1min": 83.3
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 13,
                        "pctWithin1min": 61.5
                    },
                    "Afternoon": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    },
                    "Evening": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 75
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 29,
                        "pctWithin1min": 72.4
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Conveyer Belt FWD connected - Start",
                "count": 36,
                "pctWithin1min": 69.4,
                "pctWithin2min": 77.8,
                "byTerminal": {
                    "T4": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Far East": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 11,
                        "pctWithin1min": 63.6
                    },
                    "Afternoon": {
                        "count": 10,
                        "pctWithin1min": 70
                    },
                    "Evening": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 14,
                        "pctWithin1min": 57.1
                    },
                    "Long": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 19,
                        "pctWithin1min": 78.9
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "19 Feb"
            },
            {
                "event": "Conveyer Belt FWD connected - End",
                "count": 38,
                "pctWithin1min": 68.4,
                "pctWithin2min": 71.1,
                "byTerminal": {
                    "T4": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Far East": {
                        "count": 8,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 12,
                        "pctWithin1min": 58.3
                    },
                    "Afternoon": {
                        "count": 10,
                        "pctWithin1min": 70
                    },
                    "Evening": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "Night": {
                        "count": 9,
                        "pctWithin1min": 66.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 14,
                        "pctWithin1min": 57.1
                    },
                    "Long": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 21,
                        "pctWithin1min": 76.2
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "19 Feb"
            },
            {
                "event": "Windsheild Cleaning connected - End",
                "count": 3,
                "pctWithin1min": 66.7,
                "pctWithin2min": 100,
                "byTerminal": {
                    "T4": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    }
                },
                "byTimeSlot": {
                    "Night": {
                        "count": 2,
                        "pctWithin1min": 50
                    },
                    "Evening": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Baggage Offload FWD - End",
                "count": 30,
                "pctWithin1min": 66.7,
                "pctWithin2min": 66.7,
                "byTerminal": {
                    "T4": {
                        "count": 7,
                        "pctWithin1min": 42.9
                    },
                    "Far East": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 10,
                        "pctWithin1min": 60
                    },
                    "Afternoon": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    },
                    "Evening": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 13,
                        "pctWithin1min": 53.8
                    },
                    "Long": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 14,
                        "pctWithin1min": 78.6
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "29 Jan"
            },
            {
                "event": "High loader AFT connected - End",
                "count": 18,
                "pctWithin1min": 66.7,
                "pctWithin2min": 66.7,
                "byTerminal": {
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 6,
                        "pctWithin1min": 50
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 18,
                        "pctWithin1min": 66.7
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Baggage Offload FWD - Start",
                "count": 29,
                "pctWithin1min": 65.5,
                "pctWithin2min": 79.3,
                "byTerminal": {
                    "T4": {
                        "count": 7,
                        "pctWithin1min": 42.9
                    },
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 9,
                        "pctWithin1min": 55.6
                    },
                    "Afternoon": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    },
                    "Evening": {
                        "count": 5,
                        "pctWithin1min": 80
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 13,
                        "pctWithin1min": 53.8
                    },
                    "Long": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Unknown": {
                        "count": 13,
                        "pctWithin1min": 76.9
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "29 Jan"
            },
            {
                "event": "Container Offload FWD - Start",
                "count": 23,
                "pctWithin1min": 65.2,
                "pctWithin2min": 69.6,
                "byTerminal": {
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 57.1
                    },
                    "Cargo": {
                        "count": 4,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Afternoon": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 75
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 23,
                        "pctWithin1min": 65.2
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Aircraft Passenger Embark - Start",
                "count": 69,
                "pctWithin1min": 63.8,
                "pctWithin2min": 84.1,
                "byTerminal": {
                    "T1": {
                        "count": 14,
                        "pctWithin1min": 64.3
                    },
                    "T3": {
                        "count": 12,
                        "pctWithin1min": 66.7
                    },
                    "T4": {
                        "count": 13,
                        "pctWithin1min": 53.8
                    },
                    "Far East": {
                        "count": 9,
                        "pctWithin1min": 77.8
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 19,
                        "pctWithin1min": 63.2
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 61.1
                    },
                    "Evening": {
                        "count": 14,
                        "pctWithin1min": 64.3
                    },
                    "Night": {
                        "count": 18,
                        "pctWithin1min": 66.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 33,
                        "pctWithin1min": 63.6
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 85.7
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 50
                    },
                    "Unknown": {
                        "count": 23,
                        "pctWithin1min": 60.9
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Mar"
            },
            {
                "event": "Jet bridge AFT - Start",
                "count": 8,
                "pctWithin1min": 62.5,
                "pctWithin2min": 75,
                "byTerminal": {
                    "T4": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 100
                    },
                    "Night": {
                        "count": 6,
                        "pctWithin1min": 50
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 4,
                        "pctWithin1min": 50
                    },
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "targetAccuracy": "90%",
                "targetDate": "12 Mar"
            },
            {
                "event": "Aircraft Passenger Embark - End",
                "count": 69,
                "pctWithin1min": 62.3,
                "pctWithin2min": 71,
                "byTerminal": {
                    "T1": {
                        "count": 14,
                        "pctWithin1min": 64.3
                    },
                    "T3": {
                        "count": 12,
                        "pctWithin1min": 66.7
                    },
                    "T4": {
                        "count": 13,
                        "pctWithin1min": 53.8
                    },
                    "Far East": {
                        "count": 9,
                        "pctWithin1min": 66.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 19,
                        "pctWithin1min": 63.2
                    },
                    "Afternoon": {
                        "count": 18,
                        "pctWithin1min": 61.1
                    },
                    "Evening": {
                        "count": 14,
                        "pctWithin1min": 57.1
                    },
                    "Night": {
                        "count": 18,
                        "pctWithin1min": 66.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 33,
                        "pctWithin1min": 60.6
                    },
                    "Long": {
                        "count": 7,
                        "pctWithin1min": 71.4
                    },
                    "Short": {
                        "count": 6,
                        "pctWithin1min": 50
                    },
                    "Unknown": {
                        "count": 23,
                        "pctWithin1min": 65.2
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Mar"
            },
            {
                "event": "Aircraft Passenger Disembark - End",
                "count": 76,
                "pctWithin1min": 61.8,
                "pctWithin2min": 76.3,
                "byTerminal": {
                    "T1": {
                        "count": 17,
                        "pctWithin1min": 58.8
                    },
                    "T3": {
                        "count": 13,
                        "pctWithin1min": 61.5
                    },
                    "T4": {
                        "count": 15,
                        "pctWithin1min": 60
                    },
                    "Far East": {
                        "count": 9,
                        "pctWithin1min": 66.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 21,
                        "pctWithin1min": 61.9
                    },
                    "Afternoon": {
                        "count": 19,
                        "pctWithin1min": 63.2
                    },
                    "Evening": {
                        "count": 15,
                        "pctWithin1min": 60
                    },
                    "Night": {
                        "count": 21,
                        "pctWithin1min": 61.9
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 36,
                        "pctWithin1min": 61.1
                    },
                    "Long": {
                        "count": 8,
                        "pctWithin1min": 75
                    },
                    "Short": {
                        "count": 7,
                        "pctWithin1min": 42.9
                    },
                    "Unknown": {
                        "count": 25,
                        "pctWithin1min": 64
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Mar"
            },
            {
                "event": "Container Offload FWD - End",
                "count": 23,
                "pctWithin1min": 60.9,
                "pctWithin2min": 69.6,
                "byTerminal": {
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 42.9
                    },
                    "Cargo": {
                        "count": 4,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Afternoon": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Night": {
                        "count": 8,
                        "pctWithin1min": 62.5
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 23,
                        "pctWithin1min": 60.9
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Bus Passenger Embark - End",
                "count": 17,
                "pctWithin1min": 58.8,
                "pctWithin2min": 64.7,
                "byTerminal": {
                    "Far East": {
                        "count": 8,
                        "pctWithin1min": 50
                    },
                    "Apron6": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 9,
                        "pctWithin1min": 55.6
                    },
                    "Evening": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 17,
                        "pctWithin1min": 58.8
                    }
                },
                "targetAccuracy": "70%",
                "targetDate": "29 Feb"
            },
            {
                "event": "Conveyer Belt Bulk connected - Start",
                "count": 7,
                "pctWithin1min": 57.1,
                "pctWithin2min": 57.1,
                "byTerminal": {
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 57.1
                    }
                },
                "byTimeSlot": {
                    "Early Morning": {
                        "count": 5,
                        "pctWithin1min": 60
                    },
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 7,
                        "pctWithin1min": 57.1
                    }
                },
                "targetAccuracy": "70%",
                "targetDate": "19 Feb"
            },
            {
                "event": "Baggage Offload AFT - End",
                "count": 23,
                "pctWithin1min": 56.5,
                "pctWithin2min": 65.2,
                "byTerminal": {
                    "T4": {
                        "count": 5,
                        "pctWithin1min": 20
                    },
                    "Far East": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 8,
                        "pctWithin1min": 37.5
                    },
                    "Afternoon": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    },
                    "Night": {
                        "count": 9,
                        "pctWithin1min": 66.7
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 9,
                        "pctWithin1min": 33.3
                    },
                    "Unknown": {
                        "count": 14,
                        "pctWithin1min": 71.4
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "29 Jan"
            },
            {
                "event": "Fueling connected - Start",
                "count": 15,
                "pctWithin1min": 53.3,
                "pctWithin2min": 73.3,
                "byTerminal": {
                    "T4": {
                        "count": 11,
                        "pctWithin1min": 45.5
                    },
                    "Far East": {
                        "count": 2,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 4,
                        "pctWithin1min": 25
                    },
                    "Afternoon": {
                        "count": 4,
                        "pctWithin1min": 75
                    },
                    "Night": {
                        "count": 7,
                        "pctWithin1min": 57.1
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 10,
                        "pctWithin1min": 40
                    },
                    "Unknown": {
                        "count": 5,
                        "pctWithin1min": 80
                    }
                },
                "targetAccuracy": "90%",
                "targetDate": "12 Mar"
            },
            {
                "event": "Container Offload AFT - End",
                "count": 14,
                "pctWithin1min": 50,
                "pctWithin2min": 64.3,
                "byTerminal": {
                    "CARGO": {
                        "count": 7,
                        "pctWithin1min": 42.9
                    },
                    "Cargo": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Early Morning": {
                        "count": 3,
                        "pctWithin1min": 33.3
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 60
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 14,
                        "pctWithin1min": 50
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Baggage Onload AFT - Start",
                "count": 8,
                "pctWithin1min": 50,
                "pctWithin2min": 50,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 50
                    },
                    "Far East": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 50
                    },
                    "Night": {
                        "count": 4,
                        "pctWithin1min": 50
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 4,
                        "pctWithin1min": 25
                    },
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 75
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Baggage Onload FWD - Start",
                "count": 11,
                "pctWithin1min": 45.5,
                "pctWithin2min": 54.5,
                "byTerminal": {
                    "T4": {
                        "count": 3,
                        "pctWithin1min": 33.3
                    },
                    "Far East": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 3,
                        "pctWithin1min": 66.7
                    },
                    "Night": {
                        "count": 5,
                        "pctWithin1min": 40
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 5,
                        "pctWithin1min": 20
                    },
                    "Unknown": {
                        "count": 6,
                        "pctWithin1min": 66.7
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "Aircraft Passenger Disembark - Start",
                "count": 76,
                "pctWithin1min": 44.7,
                "pctWithin2min": 84.2,
                "byTerminal": {
                    "T1": {
                        "count": 17,
                        "pctWithin1min": 41.2
                    },
                    "T3": {
                        "count": 13,
                        "pctWithin1min": 46.2
                    },
                    "T4": {
                        "count": 15,
                        "pctWithin1min": 46.7
                    },
                    "Far East": {
                        "count": 9,
                        "pctWithin1min": 44.4
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 21,
                        "pctWithin1min": 42.9
                    },
                    "Afternoon": {
                        "count": 19,
                        "pctWithin1min": 52.6
                    },
                    "Evening": {
                        "count": 15,
                        "pctWithin1min": 40
                    },
                    "Night": {
                        "count": 21,
                        "pctWithin1min": 42.9
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 36,
                        "pctWithin1min": 41.7
                    },
                    "Long": {
                        "count": 8,
                        "pctWithin1min": 75
                    },
                    "Short": {
                        "count": 7,
                        "pctWithin1min": 28.6
                    },
                    "Unknown": {
                        "count": 25,
                        "pctWithin1min": 44
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Mar"
            },
            {
                "event": "Baggage Onload AFT - End",
                "count": 8,
                "pctWithin1min": 25,
                "pctWithin2min": 62.5,
                "byTerminal": {
                    "T4": {
                        "count": 2,
                        "pctWithin1min": 0
                    },
                    "Far East": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 50
                    },
                    "Night": {
                        "count": 4,
                        "pctWithin1min": 25
                    }
                },
                "byDuration": {
                    "Medium": {
                        "count": 4,
                        "pctWithin1min": 0
                    },
                    "Unknown": {
                        "count": 4,
                        "pctWithin1min": 50
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "5 Feb"
            },
            {
                "event": "First Bus Arrival Time",
                "count": 1,
                "pctWithin1min": 0,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "targetAccuracy": "60%",
                "targetDate": "12 Mar"
            },
            {
                "event": "Container Onload AFT - Start",
                "count": 1,
                "pctWithin1min": 0,
                "pctWithin2min": 100,
                "byTerminal": {
                    "CARGO": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 1,
                        "pctWithin1min": 0
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "12 Feb"
            },
            {
                "event": "Container Onload FWD - End",
                "count": 2,
                "pctWithin1min": 0,
                "pctWithin2min": 0,
                "byTerminal": {
                    "CARGO": {
                        "count": 2,
                        "pctWithin1min": 0
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 0
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 2,
                        "pctWithin1min": 0
                    }
                },
                "targetAccuracy": "75%",
                "targetDate": "12 Feb"
            },
            {
                "event": "Container Onload FWD - Start",
                "count": 2,
                "pctWithin1min": 50,
                "pctWithin2min": 100,
                "byTerminal": {
                    "CARGO": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 2,
                        "pctWithin1min": 50
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Container Onload AFT - End",
                "count": 1,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "CARGO": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            },
            {
                "event": "Last Bus Departure Time",
                "count": 1,
                "pctWithin1min": 100,
                "pctWithin2min": 100,
                "byTerminal": {
                    "Far East": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byTimeSlot": {
                    "Morning": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "byDuration": {
                    "Unknown": {
                        "count": 1,
                        "pctWithin1min": 100
                    }
                },
                "targetAccuracy": null,
                "targetDate": null
            }
        ]
    },
    "A": {
        "name": "All Data",
        "description": "Includes all 117 turnarounds",
        "overall": {
            "totalTurnarounds": 117,
            "totalDataPoints": 1917,
            "pctWithin1min": 76.8,
            "pctWithin2min": 85,
            "pctWithin5min": 91
        },
        "filters": {
            "terminals": [
                "Apron6",
                "CARGO",
                "Cargo",
                "Far East",
                "T1",
                "T3",
                "T4",
                "T5"
            ],
            "terminalStands": {
                "T1": [
                    "ST104",
                    "ST105",
                    "ST106",
                    "ST108"
                ],
                "T3": [
                    "ST303",
                    "ST305",
                    "ST306"
                ],
                "T4": [
                    "ST401",
                    "ST403",
                    "ST404",
                    "ST406M",
                    "ST407"
                ],
                "T5": [
                    "511"
                ],
                "Far East": [
                    "E20",
                    "E20L",
                    "E21R",
                    "E22L",
                    "E22R"
                ],
                "CARGO": [
                    "C2",
                    "C3",
                    "C4",
                    "C5",
                    "C6"
                ],
                "Cargo": [
                    "C2C"
                ],
                "Apron6": [
                    "E20L",
                    "E21R",
                    "ST506R"
                ]
            },
            "timeSlots": [
                "Early Morning",
                "Morning",
                "Afternoon",
                "Evening",
                "Night"
            ],
            "durations": [
                "Short",
                "Medium",
                "Long",
                "Unknown"
            ]
        },
        "events": []
    },
    "C": {
        "name": "Strict Filter",
        "description": "Excludes 34 problematic turnarounds",
        "overall": {
            "totalTurnarounds": 83,
            "totalDataPoints": 1260,
            "pctWithin1min": 83.5,
            "pctWithin2min": 91.2,
            "pctWithin5min": 95.9
        },
        "filters": {
            "terminals": [
                "Apron6",
                "CARGO",
                "Cargo",
                "Far East",
                "T1",
                "T3",
                "T4",
                "T5"
            ],
            "terminalStands": {
                "T1": [
                    "ST104",
                    "ST105",
                    "ST106",
                    "ST108"
                ],
                "T3": [
                    "ST303",
                    "ST305",
                    "ST306"
                ],
                "T4": [
                    "ST401",
                    "ST403",
                    "ST404",
                    "ST406M",
                    "ST407"
                ],
                "T5": [
                    "511"
                ],
                "Far East": [
                    "E20",
                    "E20L",
                    "E21R",
                    "E22L",
                    "E22R"
                ],
                "CARGO": [
                    "C2",
                    "C3",
                    "C4",
                    "C5",
                    "C6"
                ],
                "Cargo": [
                    "C2C"
                ],
                "Apron6": [
                    "E20L",
                    "E21R",
                    "ST506R"
                ]
            },
            "timeSlots": [
                "Early Morning",
                "Morning",
                "Afternoon",
                "Evening",
                "Night"
            ],
            "durations": [
                "Short",
                "Medium",
                "Long",
                "Unknown"
            ]
        },
        "events": []
    }
};

dashboardData.C.events = dashboardData.B.events;
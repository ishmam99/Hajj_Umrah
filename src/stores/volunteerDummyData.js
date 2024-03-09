const volunteerApplicantListData = [
    {
      id: 1,
      name: 'Mr. Rocky',
      volunteerJob: 'Environmental Cleanup Volunteer',
      expertiseArea: 'Software Engineer',
      additionalInterestArea: 'Coding(Expert), Graphic Design(Intermediate), Gardening(Beginner)',
      moreInfo: 'I love programming, i love coding, i love python etc...',
      applicationStatus: 'Waiting',
      availableDay: 'Daily',
      startTime: '10:00',
      endTime: '12:00'
    },
    {
      id: 2,
      name: 'Mr. Mick',
      volunteerJob: 'Tutoring Volunteer',
      expertiseArea: 'Graphics Designer',
      additionalInterestArea: 'Coding(Expert), Gardening(Beginner)',
      moreInfo:
        'In our noble mission, we strive to alleviate hunger and nourish the vulnerable in our community. Committed to the values of compassion and social responsibility, we dedicate ourselves to feeding those in need.',
      applicationStatus: 'Waiting',
      availableDay: 'Weekly',
      repeatedTime: '2',
      startTime: '10:00',
      endTime: '17:00'
    },
    {
      id: 3,
      name: 'Mr. Micheal',
      volunteerJob: 'Teaching',
      expertiseArea: 'English, Math',
      additionalInterestArea: 'Gardening(Beginner)',
      moreInfo:
        'In our noble mission, we strive to alleviate hunger and nourish the vulnerable in our community. Committed to the values of compassion and social responsibility, we dedicate ourselves to feeding those in need.',
      applicationStatus: 'Waiting',
      availableDay: 'Monthly',
      repeatedTime: '5',
      startTime: '10:00',
      endTime: '14:00'
    },
    {
      id: 4,
      name: 'Mr. Mick',
      volunteerJob: 'Tutoring Volunteer',
      expertiseArea: 'Graphics Designer',
      additionalInterestArea: 'Coding(Expert), Gardening(Beginner)',
      moreInfo:
        'In our noble mission, we strive to alleviate hunger and nourish the vulnerable in our community. Committed to the values of compassion and social responsibility, we dedicate ourselves to feeding those in need.',
      applicationStatus: 'Waiting',
      availableDay: 'Biweekly',
      repeatedTime: '3',
      startTime: '10:00',
      endTime: '11:00'
    },
    {
      id: 5,
      name: 'Mr. Micheal',
      volunteerJob: 'Tutoring Volunteer',
      expertiseArea: 'Graphics Designer',
      additionalInterestArea: 'Coding(Expert), Gardening(Beginner)',
      moreInfo:
        'In our noble mission, we strive to alleviate hunger and nourish the vulnerable in our community. Committed to the values of compassion and social responsibility, we dedicate ourselves to feeding those in need.',
      applicationStatus: 'Waiting',
      availableDay: 'Weekly',
      repeatedTime: '3',
      startTime: '10:00',
      endTime: '11:00'
    }
]

const volunteeringPostsData = [
    {
      id: 1,
      postTitle: 'Environmental Cleanup Volunteer',
      volunteeringType: 'Remote',
      image: '/src/assets/image/common/v3.jpg',
      description:
        'Join us in our efforts to clean up local parks and beaches. Help protect the environment and promote sustainability.',
      venue: 'City Park',
      date: 'Every Saturday',
      time: '9:00 AM - 12:00 PM',
      totalWorkingTime: '3Hours',
      responsibilities: 'Collect and dispose of litter',
      gender: 'Any',
      benefits: 'Make a positive impact on the environment',
      ageRange: '18 and above',
      qualification: 'No prior experience required',
      isPosted: true
    },
    {
      id: 2,
      postTitle: 'Tutoring Volunteer',
      image: '/src/assets/image/common/v1.jpg',

      description:
        'Provide academic support and mentorship to underprivileged students in our community. Help students excel academically and achieve their goals.',
      venue: 'Local Community Center',
      time: 'Monday to Friday, 3:00 PM - 6:00 PM',
      responsibilities: [
        'Assist students with homework and assignments',
        'Provide one-on-one tutoring in subjects such as Math, English, and Science',
        'Offer guidance and encouragement to students'
      ],
      gender: 'Male',
      benefits: [
        "Make a difference in students' lives",
        'Develop teaching and mentoring skills',
        'Build relationships with students and families'
      ],
      ageRange: 'College students and above',
      qualification: 'Strong academic background in relevant subjects'
    },
    {
      id: 3,
      postTitle: 'Event Planning Volunteer',
      image: '/src/assets/image/common/v6.jpg',
      description:
        'Assist in the planning and execution of community events and fundraisers. Get involved in organizing various activities and ensuring the success of our events.',
      venue: 'Community Center',
      time: 'Flexible hours, based on event schedule',
      responsibilities: [
        'Help with event logistics and coordination',
        'Assist in setting up and dismantling event materials',
        'Engage with attendees and provide assistance as needed'
      ],
      gender: 'Any',
      benefits: [
        'Gain experience in event planning and management',
        'Contribute to community initiatives',
        'Network with event professionals'
      ],
      ageRange: '18 and above',
      qualification: 'Strong organizational and communication skills'
    },
    {
      id: 4,
      postTitle: 'Animal Shelter Volunteer',
      image: '/src/assets/image/common/v5.jpg',
      description:
        'Assist in caring for animals at the local animal shelter. Help with feeding, grooming, and providing enrichment activities for shelter animals.',
      venue: 'City Animal Shelter',
      time: 'Weekdays, flexible hours',
      responsibilities: [
        'Feed and water animals',
        'Clean animal enclosures and living areas',
        'Socialize with animals to provide companionship'
      ],
      gender: 'Female',
      benefits: [
        'Make a difference in the lives of animals',
        'Gain experience in animal care',
        'Contribute to animal welfare efforts'
      ],
      ageRange: '16 and above (with parental consent)',
      qualification: 'No prior experience required'
    },
    {
      id: 5,
      postTitle: 'Community Garden Volunteer',
      image: '/src/assets/image/common/v4.jpg',
      description:
        'Join us in maintaining and beautifying our community garden. Assist with planting, watering, weeding, and harvesting fresh produce.',
      venue: 'Local Community Garden',
      time: 'Weekends, 10:00 AM - 1:00 PM',
      responsibilities: [
        'Plant and maintain garden beds',
        'Water and fertilize plants',
        'Harvest and distribute produce to community members'
      ],
      gender: 'Any',
      benefits: [
        'Learn about gardening and sustainable agriculture',
        'Enjoy the outdoors and connect with nature',
        'Promote healthy eating and food security in the community'
      ],
      ageRange: '12 and above (with adult supervision)',
      qualification: 'No prior gardening experience required'
    },
    {
      id: 6,
      postTitle: 'Senior Center Volunteer',
      image: '/src/assets/image/common/v1.jpg',
      description:
        'Provide companionship and support to senior citizens at the local senior center. Engage in activities, assist with meals, and offer friendly conversation.',
      venue: 'Senior Center',
      time: 'Weekdays, 9:00 AM - 12:00 PM',
      responsibilities: [
        'Assist with meal service and cleanup',
        'Engage seniors in social and recreational activities',
        'Offer assistance with daily tasks as needed'
      ],
      gender: 'Female',
      benefits: [
        'Make a positive impact on the lives of seniors',
        'Build meaningful connections with elderly community members',
        'Gain insights into issues affecting older adults'
      ],
      ageRange: '16 and above',
      qualification: 'Friendly and compassionate demeanor'
    },
    {
      id: 7,
      postTitle: 'Habitat Restoration Volunteer',
      image: '/src/assets/image/common/v2.jpg',
      description:
        'Join us in restoring and preserving natural habitats in our community. Help with planting native species, removing invasive plants, and maintaining trails.',
      venue: 'Local Nature Reserve',
      time: 'Weekends, 8:00 AM - 12:00 PM',
      responsibilities: [
        'Plant native trees and shrubs',
        'Remove invasive plant species',
        'Maintain trails and clear debris'
      ],
      gender: 'Any',
      benefits: [
        'Contribute to conservation efforts and biodiversity',
        'Enjoy outdoor recreation and exercise',
        'Learn about local ecosystems and wildlife'
      ],
      ageRange: '14 and above (with adult supervision)',
      qualification: 'Interest in environmental conservation'
    },
    {
      id: 8,
      postTitle: 'Youth Mentor Volunteer',
      image: '/src/assets/image/common/v3.jpg',
      description:
        'Serve as a mentor and role model for at-risk youth in our community. Provide guidance, support, and encouragement to help youth reach their full potential.',
      venue: 'Local Youth Center',
      time: 'Evenings, 5:00 PM - 8:00 PM',
      responsibilities: [
        'Engage youth in positive activities and discussions',
        'Offer academic support and homework assistance',
        'Provide guidance on life skills and decision-making'
      ],
      gender: 'Male',
      benefits: [
        'Make a difference in the lives of young people',
        'Develop mentoring and leadership skills',
        'Build meaningful relationships with youth'
      ],
      ageRange: '21 and above',
      qualification: 'Strong interpersonal and communication skills'
    }
]
  
const volunteerInterestExpertiseData = [
    {
      id: 1,
      interestField: 'Coding',
      expertise: 'Expert',
      isChecked: true,
      volunteerSubSection: [
        {
          id: 21,
          interestField: 'C',
          expertise: 'Expert',
          isChecked: true
        },
        {
          id: 22,
          interestField: 'C++',
          expertise: 'Expert',
          isChecked: false
        },
        {
          id: 23,
          interestField: 'Python',
          expertise: 'Expert',
          isChecked: true
        },
        {
          id: 24,
          interestField: 'Java',
          expertise: 'Expert',
          isChecked: true
        }
      ]
    },
    {
      id: 2,
      interestField: 'Graphic Design',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 3,
      interestField: 'Teaching',
      expertise: 'Expert',
      isChecked: false
    },
    {
      id: 4,
      interestField: 'Event Planning',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 5,
      interestField: 'Animal Care',
      expertise: 'Beginner',
      isChecked: false
    },
    {
      id: 6,
      interestField: 'Gardening',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 7,
      interestField: 'Tutoring',
      expertise: 'Expert',
      isChecked: false,
      volunteerSubSection: [
        {
          id: 21,
          interestField: 'Physics',
          expertise: 'Expert',
          isChecked: true
        },
        {
          id: 22,
          interestField: 'Math',
          expertise: 'Expert',
          isChecked: false
        },
        {
          id: 23,
          interestField: 'Chemistry',
          expertise: 'Intermediate',
          isChecked: false
        },
        {
          id: 24,
          interestField: 'Programming',
          expertise: 'Expert',
          isChecked: false
        }
      ]
    },
    {
      id: 8,
      interestField: 'Marketing',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 9,
      interestField: 'Fundraising',
      expertise: 'Expert',
      isChecked: false
    },
    {
      id: 10,
      interestField: 'Writing/Editing',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 11,
      interestField: 'Healthcare Assistance',
      expertise: 'Beginner',
      isChecked: false
    },
    {
      id: 12,
      interestField: 'Carpentry',
      expertise: 'Beginner',
      isChecked: false
    },
    {
      id: 13,
      interestField: 'Cooking/Food Service',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 14,
      interestField: 'Translation/Interpretation',
      expertise: 'Expert',
      isChecked: false
    },
    {
      id: 15,
      interestField: 'Mentoring',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 16,
      interestField: 'Music/Performance',
      expertise: 'Beginner',
      isChecked: false
    },
    {
      id: 17,
      interestField: 'Customer Service',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 18,
      interestField: 'Photography/Videography',
      expertise: 'Intermediate',
      isChecked: false
    },
    {
      id: 19,
      interestField: 'Legal Assistance',
      expertise: 'Expert',
      isChecked: false
    },
    {
      id: 20,
      interestField: 'Fitness/Personal Training',
      expertise: 'Intermediate',
      isChecked: false
    }
]
  
// Export the arrays
export { volunteerApplicantListData, volunteeringPostsData, volunteerInterestExpertiseData };
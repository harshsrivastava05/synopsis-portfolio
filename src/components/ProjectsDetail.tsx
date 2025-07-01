import { MapPin, Shield, Bell, Globe, Upload, CheckCircle } from "lucide-react";
export const projects2 = {
  Maskwa: {
    title: "Maskwa",
    subtitle: "Traditional Land Verification & Management System",
    description:
      "Maskwa is a digital platform designed to streamline the verification and approval process for traditional land holdings. It ensures that landowners can verify the legitimacy, usability, and ownership of their land before starting any construction or development work. The system involves real-time mapping, document authentication, and approval from designated authorities.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: [
      {
        title: "Land Mapping System",
        description:
          "Visual representation of land plots with GPS coordinates.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Multi-Level Authentication",
        description:
          "Secure login for landowners, approvers, and administrators.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Smart Notification Alerts",
        description:
          "Real-time alerts on approval status, document updates, etc.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Web Crawler Integration",
        description:
          "Automatically fetches data from government/public records for cross-verification.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Document Upload & Digital Storage",
        description:
          "Upload land records, ownership deeds, and legal documents securely.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Approval Workflow System",
        description:
          "Step-by-step approval pipeline for transparency and tracking.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
  "healthai-analytics": {
    title: "HealthAI Analytics",
    subtitle: "AI-Powered Medical Analytics & Diagnostic Assistant",
    description:
      "HealthAI Analytics leverages artificial intelligence and machine learning to provide advanced medical analytics, predictive diagnostics, and treatment recommendations. The platform assists healthcare professionals in making data-driven decisions for improved patient outcomes.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["Python", "TensorFlow", "Flask", "Docker"],
    features: [
      {
        title: "Predictive Analytics Engine",
        description:
          "Advanced AI algorithms that predict patient health risks and potential complications before they occur.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Secure AI Authentication",
        description:
          "Multi-factor authentication for accessing sensitive AI-generated medical insights and recommendations.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Real-time Health Alerts",
        description:
          "Intelligent notifications for abnormal test results, drug interactions, and treatment milestone alerts.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Medical Database Integration",
        description:
          "Seamlessly connects with medical databases and research repositories for comprehensive analysis.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Diagnostic Image Processing",
        description:
          "AI-powered analysis of medical images including X-rays, MRIs, and CT scans with detailed reports.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Treatment Recommendation System",
        description:
          "Evidence-based treatment suggestions with clinical decision support and outcome predictions.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
  "patient-portal": {
    title: "Patient Portal",
    subtitle: "Comprehensive Patient Engagement & Self-Service Platform",
    description:
      "Patient Portal is a user-friendly digital platform that empowers patients to take control of their healthcare journey. It provides secure access to medical records, appointment scheduling, communication with healthcare providers, and personalized health management tools.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["Vue.js", "Express", "MongoDB", "Stripe"],
    features: [
      {
        title: "Personal Health Dashboard",
        description:
          "Comprehensive overview of health metrics, upcoming appointments, and personalized health insights.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Secure Patient Authentication",
        description:
          "Multi-layered security for patient login with biometric options and two-factor authentication.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Appointment & Medication Alerts",
        description:
          "Smart reminders for upcoming appointments, medication schedules, and preventive care notifications.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Telehealth Integration",
        description:
          "Seamless connection to telemedicine platforms for virtual consultations and remote monitoring.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Medical Records Access",
        description:
          "Secure access to complete medical history, test results, and treatment plans with download options.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Healthcare Provider Communication",
        description:
          "Direct messaging system with healthcare providers and care team coordination tools.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
  "medical-iot-dashboard": {
    title: "Medical IoT Dashboard",
    subtitle: "Internet of Things Medical Device Monitoring System",
    description:
      "Medical IoT Dashboard is an advanced monitoring platform that connects and manages various medical IoT devices in healthcare facilities. It provides real-time data visualization, device status monitoring, and automated alert systems for optimal patient care.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["React", "D3.js", "Socket.io", "Redis"],
    features: [
      {
        title: "Real-time Device Monitoring",
        description:
          "Live monitoring of connected medical devices with real-time data visualization and status updates.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Secure Device Authentication",
        description:
          "Enterprise-grade security for IoT device connections with encrypted data transmission protocols.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Critical Status Alerts",
        description:
          "Immediate notifications for device malfunctions, abnormal readings, and maintenance requirements.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Cloud Data Integration",
        description:
          "Automatic synchronization of IoT data with hospital management systems and electronic health records.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Device Configuration Management",
        description:
          "Centralized management of device settings, calibration schedules, and maintenance protocols.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Compliance Monitoring System",
        description:
          "Automated compliance tracking for medical device regulations and quality assurance protocols.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
  "telemedicine-app": {
    title: "Telemedicine App",
    subtitle: "Advanced Virtual Healthcare Consultation Platform",
    description:
      "Telemedicine App is a comprehensive virtual healthcare platform that enables secure video consultations, remote patient monitoring, and digital health services. It bridges the gap between patients and healthcare providers through cutting-edge telemedicine technology.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["React Native", "WebRTC", "Firebase", "GraphQL"],
    features: [
      {
        title: "HD Video Consultation System",
        description:
          "High-definition video calls with screen sharing capabilities for effective remote medical consultations.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "End-to-End Encryption",
        description:
          "HIPAA-compliant security with end-to-end encryption for all patient-provider communications.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Appointment Scheduling Alerts",
        description:
          "Smart scheduling system with automated reminders and calendar integration for seamless appointment management.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Electronic Prescription Integration",
        description:
          "Direct integration with pharmacy systems for digital prescription management and fulfillment.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Remote Monitoring Tools",
        description:
          "Integration with wearable devices and home monitoring equipment for continuous patient care.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Digital Health Records",
        description:
          "Seamless integration with electronic health records and real-time documentation during consultations.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
  "clinical-research-platform": {
    title: "Clinical Research Platform",
    subtitle: "Advanced Clinical Trial & Research Management System",
    description:
      "Clinical Research Platform is a comprehensive solution for managing clinical trials, research studies, and medical research data. It streamlines the entire research process from patient recruitment to data analysis and regulatory compliance.",
    carouselSlides: [
      {
        src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      },
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "Kubernetes"],
    features: [
      {
        title: "Research Data Management",
        description:
          "Comprehensive data collection, storage, and analysis tools for clinical research with real-time insights.",
        icon: <Globe className="w-8 h-8" />,
      },
      {
        title: "Research-Grade Security",
        description:
          "Advanced security protocols for protecting sensitive research data with role-based access controls.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Study Milestone Alerts",
        description:
          "Automated notifications for study milestones, patient visit schedules, and data collection deadlines.",
        icon: <Bell className="w-8 h-8" />,
      },
      {
        title: "Regulatory Compliance Integration",
        description:
          "Built-in compliance tools for FDA, GCP, and international research regulatory requirements.",
        icon: <Upload className="w-8 h-8" />,
      },
      {
        title: "Patient Recruitment System",
        description:
          "Advanced patient matching algorithms and recruitment tools for efficient study enrollment.",
        icon: <MapPin className="w-8 h-8" />,
      },
      {
        title: "Research Analytics Dashboard",
        description:
          "Comprehensive analytics and reporting tools for research outcomes and statistical analysis.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  },
};

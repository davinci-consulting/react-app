import { Navbar } from "./components/Navbar/NavbarView"
import { Footer } from "./components/Footer/FooterView"
import { Home } from "./pages/Home/HomeView"
import { About } from "./pages/About/AboutView"
import { Services } from "./pages/Services/ServicesView"
import { Careers } from "./pages/Careers/CareersView"
import { Contact } from "./pages/Contact/ContactView"
import { ProjectManagement } from "./pages/Services/Views/ProjectManagementView"
import { CloudComputing } from "./pages/Services/Views/CloudComputingView"
import { Development } from "./pages/Services/Views/DevelopmentView"
import { Operations } from "./pages/Services/Views/OperationsView"
import { DevOps } from "./pages/Services/Views/DevOpsView"
import { SeoOptimization } from "./pages/Services/Views/SeoOptimizationView"
import { CoachingAndMentoring } from "./pages/Services/Views/CoachingAndMentoringView"
import { CyberSecurityAndAuditing } from "./pages/Services/Views/CyberSecurityAndAuditingView"
import { InternetOfThings } from "./pages/Services/Views/InternetOfThingsView"
import { ArtificialIntelligence } from "./pages/Services/Views/ArtificialIntelligenceView"
import { ContentCreating } from "./pages/Services/Views/ContentCreatingView"
import { AdsAndSocialMedia } from "./pages/Services/Views/AdsAndSocialMediaView"

const Router = [
    {
        path: '/',
        element: <main><Navbar /><Home /><Footer /></main>
    },
    {
        path: 'about',
        element: <main><Navbar /><About /><Footer /></main>
    },
    {
        path: 'services',
        element: <main><Navbar /><Services /><Footer /></main>,
        children: [
            {
                path: 'project-management',
                element: <ProjectManagement />
            },
            {
                path: 'cloud-computing',
                element: <CloudComputing />
            },
            {
                path: 'development',
                element: <Development />
            },
            {
                path: 'operations',
                element: <Operations />
            },
            {
                path: 'devops',
                element: <DevOps />
            },
            {
                path: 'seo-optimization',
                element: <SeoOptimization />
            },
            {
                path: 'coaching-and-mentoring',
                element: <CoachingAndMentoring />
            },
            {
                path: 'cyber-security-and-auditing',
                element: <CyberSecurityAndAuditing />
            },
            {
                path: 'internet-of-things',
                element: <InternetOfThings />
            },
            {
                path: 'artificial-intelligence',
                element: <ArtificialIntelligence />
            },
            {
                path: 'content-creating',
                element: <ContentCreating />
            },
            {
                path: 'ads-and-social-media',
                element: <AdsAndSocialMedia />
            }
        ]
    },
    {
        path: 'careers',
        element: <main><Navbar /><Careers /><Footer /></main>
    },
    {
        path: 'contact',
        element: <main><Navbar /><Contact /><Footer /></main>
    }
]

export default Router
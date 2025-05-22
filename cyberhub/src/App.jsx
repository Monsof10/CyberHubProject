import { Suspense, lazy } from "react";
import Loading from "./components/Loader/Loading";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
const Chatbot = lazy(() => import("./components/ChatBot/ChatBot"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const EmailConfirmation = lazy(() => import("./pages/Auth/EmailConfirmation"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Settings = lazy(() => import("./pages/Auth/Settings"));
const Profile = lazy(() => import("./pages/Auth/Profile"));
const CrossSiteScriptingHome = lazy(() => import("./pages/CrossSiteScripting/HomePage"));
const ForensicScienceHome = lazy(() => import("./pages/ForensicScience/HomePage"));
const UserEnumerationHome = lazy(() => import("./pages/UserEnumeration/HomePage"));
const PrivilegeEscalationHome = lazy(() => import("./pages/PrivilegeEscalation/HomePage"));
const BufferOverflowsHome = lazy(() => import("./pages/BufferOverflows/HomePage"));
const DnsPoisoningHome = lazy(() => import("./pages/DnsPoisoning/HomePage"));
const ServerSideRequestForgeryHome = lazy(() => import("./pages/ServerSideRequestForgery/HomePage"));
const DosAndDdosHome = lazy(() => import("./pages/DosAndDdos/HomePage"));
const DosArticle = lazy(() => import("./pages/DosAndDdos/Article"));
const DosInitialQuiz = lazy(() => import("./pages/DosAndDdos/InitialQuiz"));
const DosNormal = lazy(() => import("./pages/DosAndDdos/AttackPages/DosNormal"));
const IcmpFloodAttack = lazy(() => import("./pages/DosAndDdos/AttackPages/DdosAttack"));
const SynFloodAttack = lazy(() => import("./pages/DosAndDdos/AttackPages/SlowlorisAttack"));
const UdpFloodAttack = lazy(() => import("./pages/DosAndDdos/AttackPages/HttpFloodAttack"));
const CommonAttacks = lazy(() => import("./pages/DosAndDdos/AttackPages/CommonAttacks"));
const DosFinalQuiz = lazy(() => import("./pages/DosAndDdos/FinalQuiz"));
const SpoofingHome = lazy(() => import("./pages/Spoofing/HomePage"));
const SpoofingArticle = lazy(() => import("./pages/Spoofing/Article"));
const SpoofingInitialQuiz = lazy(() => import("./pages/Spoofing/InitialQuiz"));
const DnsSpoofing = lazy(() => import("./pages/Spoofing/AttackPages/DnsSpoofing"));
const IpSpoofing = lazy(() => import("./pages/Spoofing/AttackPages/IpSpoofing"));
const SpoofingFinalQuiz = lazy(() => import("./pages/Spoofing/FinalQuiz"));
const LandingPage = lazy(() => import("./pages/Sql-Injection"));
const ChildrenEducation = lazy(() => import("./pages/Spoofing"));
const SqlMain = lazy(() => import("./pages/SqlMain"));
const SqlInjectionHome = lazy(() => import("./pages/Sql-Injection/HomePage"));
const Article = lazy(() => import("./pages/Sql-Injection/Article"));
const SqlInitialQuiz = lazy(() => import("./pages/Sql-Injection/InitialQuiz"));
const ClassicSqlInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/ClassicSqlInjection"));
const UnionBasedInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/UnionBasedInjection"));
const BlindSqlInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/BlindSqlInjection"));
const SqlFinalQuiz = lazy(() => import("./pages/Sql-Injection/FinalQuiz"));
const OnlineCourseAbout = lazy(() => import("./pages/Sql-Injection/about"));
const OnlineCourseCourses = lazy(() => import("./pages/Sql-Injection/courses"));
const OnlineCourseFilter = lazy(() => import("./pages/Sql-Injection/course-filter"));
const OnlineCourseInstructors = lazy(() => import("./pages/Sql-Injection/instructors"));
const OnlineCourseBlogs = lazy(() => import("./pages/Sql-Injection/blogs"));
const OnlineCourseContact = lazy(() => import("./pages/Sql-Injection/contact"));

const PenetrationTesting = lazy(() => import("./pages/SkillPaths/PenetrationTesting"));
const ProgramSecurity = lazy(() => import("./pages/SkillPaths/ProgramSecurity"));
const SystemSecurity = lazy(() => import("./pages/SkillPaths/SystemSecurity"));
const SoftwareExploitation = lazy(() => import("./pages/SkillPaths/SoftwareExploitation"));
const BlueRedTeam = lazy(() => import("./pages/SkillPaths/BlueRedTeam"));
const GeneralSkillsPage = lazy(() => import("./pages/CTFChallenges/GeneralSkillsPage"));
const ForensicsPage = lazy(() => import("./pages/CTFChallenges/ForensicsPage"));
const WebExploitationPage = lazy(() => import("./pages/CTFChallenges/WebExploitationPage"));
const DosMainPage = lazy(() => import("./pages/DosMain"));
const NotFound = lazy(() => import("./pages/404"));
const TerminalPage = lazy(() => import("./pages/Terminal/TerminalPage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Workspace = lazy(() => import("./pages/Workspace"));

import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="app-container">
      <Layout>
        <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          }
        />
        
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Settings"
          element={
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/CrossSiteScripting/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <CrossSiteScriptingHome />
            </Suspense>
          }
        />
        <Route
          path="/ForensicScience/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <ForensicScienceHome />
            </Suspense>
          }
        />
        <Route
          path="/UserEnumeration/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              < UserEnumerationHome />
            </Suspense>
          }
        />
        <Route
          path="/PrivilegeEscalation/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <PrivilegeEscalationHome />
            </Suspense>
          }
        />
        <Route
          path="/BufferOverflows/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <BufferOverflowsHome />
            </Suspense>
          }
        />
        <Route
          path="/DnsPoisoning/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <DnsPoisoningHome />
            </Suspense>
          }
        />
        <Route
          path="/ServerSideRequestForgery/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <ServerSideRequestForgeryHome />
            </Suspense>
          }
        />
        <Route
          path="/Auth/EmailConfirmation"
          element={
            <Suspense fallback={<Loading />}>
              <EmailConfirmation />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<Loading />}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Suspense fallback={<Loading />}>
              <ResetPassword />
            </Suspense>
          }
        />
        <Route
          path="/Profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />

        {/* DOS/DDOS Routes */}
        <Route
          path="/DosAndDdos/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <DosAndDdosHome />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/article"
          element={
            <Suspense fallback={<Loading />}>
              <DosArticle />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/InitialQuiz"
          element={
            <Suspense fallback={<Loading />}>
              <DosInitialQuiz />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/AttackPages/DosNormal"
          element={
            <Suspense fallback={<Loading />}>
              <DosNormal />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/AttackPages/DdosAttack"
          element={
            <Suspense fallback={<Loading />}>
              <IcmpFloodAttack />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/AttackPages/SlowlorisAttack"
          element={
            <Suspense fallback={<Loading />}>
              <SynFloodAttack />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/AttackPages/HttpFloodAttack"
          element={
            <Suspense fallback={<Loading />}>
              <UdpFloodAttack />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/AttackPages/CommonAttacks"
          element={
            <Suspense fallback={<Loading />}>
              <CommonAttacks />
            </Suspense>
          }
        />
        <Route
          path="/DosAndDdos/FinalQuiz"
          element={
            <Suspense fallback={<Loading />}>
              <DosFinalQuiz />
            </Suspense>
          }
        />
        
        <Route
          path="Spoofing"
          element={
            <Suspense fallback={<Loading />}>
              <ChildrenEducation />
            </Suspense>
          }
        />
        {/* Spoofing Routes */}
        <Route
          path="/Spoofing/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <SpoofingHome />
            </Suspense>
          }
        />
        <Route
          path="/Spoofing/article"
          element={
            <Suspense fallback={<Loading />}>
              <SpoofingArticle />
            </Suspense>
          }
        />
        <Route
          path="/Spoofing/InitialQuiz"
          element={
            <Suspense fallback={<Loading />}>
              <SpoofingInitialQuiz />
            </Suspense>
          }
        />
        <Route
          path="/Spoofing/AttackPages/DnsSpoofing"
          element={
            <Suspense fallback={<Loading />}>
              <DnsSpoofing />
            </Suspense>
          }
        />
        <Route
          path="/Spoofing/AttackPages/IpSpoofing"
          element={
            <Suspense fallback={<Loading />}>
              <IpSpoofing />
            </Suspense>
          }
        />
        <Route
          path="/Spoofing/final-quiz"
          element={
            <Suspense fallback={<Loading />}>
              <SpoofingFinalQuiz />
            </Suspense>
          }
        />
         
        {/* SQL Injection Routes */}
        <Route
          path="/sql-main"
          element={
            <Suspense fallback={<Loading />}>
              <SqlMain />
            </Suspense>
          }
        />
        {/* Skill Paths */}
        <Route
          path="/SkillPaths/PenetrationTesting"
          element={
            <Suspense fallback={<Loading />}>
              <PenetrationTesting />
            </Suspense>
          }
        />
        <Route
          path="/skillpaths/program-security"
          element={
            <Suspense fallback={<Loading />}>
              <ProgramSecurity />
            </Suspense>
          }
        />
        <Route
          path="/skillpaths/system-security"
          element={
            <Suspense fallback={<Loading />}>
              <SystemSecurity />
            </Suspense>
          }
        />
        <Route
          path="/skillpaths/software-exploitation"
          element={
            <Suspense fallback={<Loading />}>
              <SoftwareExploitation />
            </Suspense>
          }
        />
        <Route
          path="/skillpaths/blue-red-team"
          element={
            <Suspense fallback={<Loading />}>
              <BlueRedTeam />
            </Suspense>
          }
        />
        {/* CTF Challenge Routes */}
        <Route
          path="/CTFChallenges/GeneralSkillsPage"
          element={
            <Suspense fallback={<Loading />}>
              <GeneralSkillsPage />
            </Suspense>
          }
        />
        <Route
          path="/CTFChallenges/ForensicsPage"
          element={
            <Suspense fallback={<Loading />}>
              <ForensicsPage />
            </Suspense>
          }
        />
        <Route
          path="/CTFChallenges/WebExploitationPage"
          element={
            <Suspense fallback={<Loading />}>
              <WebExploitationPage />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/HomePage"
          element={
            <Suspense fallback={<Loading />}>
              <SqlInjectionHome />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/Article"
          element={
            <Suspense fallback={<Loading />}>
              <Article />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/InitialQuiz"
          element={
            <Suspense fallback={<Loading />}>
              <SqlInitialQuiz />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/AttackPages/ClassicSqlInjection"
          element={
            <Suspense fallback={<Loading />}>
              <ClassicSqlInjection />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/attack-pages/union-based-injection"
          element={
            <Suspense fallback={<Loading />}>
              <UnionBasedInjection />
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/AttackPages/BlindSqlInjection"
          element={
            <Suspense fallback={<Loading />}>
              <BlindSqlInjection/>
            </Suspense>
          }
        />
        <Route
          path="/Sql-Injection/final-quiz"
          element={
            <Suspense fallback={<Loading />}>
              <SqlFinalQuiz />
            </Suspense>
          }
        />

        {/* Other Routes */}
        <Route path="/*">
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseAbout />
              </Suspense>
            }
          />
          <Route
            path="courses"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseCourses />
              </Suspense>
            }
          />
          
          <Route
            path="course-filter"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseFilter />
              </Suspense>
            }
          />
          <Route
            path="instructors"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseInstructors />
              </Suspense>
            }
          />
          <Route
            path="blogs"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseBlogs />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineCourseContact />
              </Suspense>
            }
          />
          <Route
            path="DosMain"
            element={
              <Suspense fallback={<Loading />}>
                <DosMainPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        <Route
          path="/terminal"
          element={
            <Suspense fallback={<Loading />}>
              <TerminalPage />
            </Suspense>
          }
        />
        <Route
          path="/test-rag"
          element={
            <Suspense fallback={<Loading />}>
              <TestPage />
            </Suspense>
          }
        />

        <Route
          path="/404"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/workspace"
          element={
            <Suspense fallback={<Loading />}>
              <Workspace />
            </Suspense>
          }
        />
        </Routes>
      </Layout>
    </div>
    
  );
}

export default App;

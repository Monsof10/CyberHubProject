import { Suspense, lazy } from "react";
import Loading from "./components/Loader/Loading";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const EmailConfirmation = lazy(() => import("./pages/Auth/EmailConfirmation"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Profile = lazy(() => import("./pages/Auth/Profile"));
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
const SqlInjectionHome = lazy(() => import("./pages/Sql-Injection/HomePage"));
const Article = lazy(() => import("./pages/Sql-Injection/Article"));
const SqlInitialQuiz = lazy(() => import("./pages/Sql-Injection/InitialQuiz"));
const ClassicSqlInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/ClassicSqlInjection"));
const UnionBasedInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/UnionBasedInjection"));
const BlindSqlInjection = lazy(() => import("./pages/Sql-Injection/AttackPages/BlindSqlInjection"));

const SqlFinalQuiz = lazy(() => import("./pages/Sql-Injection/FinalQuiz"));
const OnlineCourseAbout = lazy(() => import("./pages/Sql-Injection/about"));
const OnlineCourseCourses = lazy(() => import("./pages/Sql-Injection/courses"));
const OnlineCourseDetail = lazy(() => import("./pages/Sql-Injection/course-detail"));
const OnlineCourseFilter = lazy(() => import("./pages/Sql-Injection/course-filter"));
const OnlineCourseInstructors = lazy(() => import("./pages/Sql-Injection/instructors"));
const OnlineCourseInstructorDetail = lazy(() => import("./pages/Sql-Injection/instructor-detail"));
const OnlineCourseBlogs = lazy(() => import("./pages/Sql-Injection/blogs"));
const OnlineCourseBlogColumnOne = lazy(() => import("./pages/Sql-Injection/blog-column-one"));
const OnlineCourseBlogColumnTwo = lazy(() => import("./pages/Sql-Injection/blog-column-two"));
const OnlineCourseBlogColumnThree = lazy(() => import("./pages/Sql-Injection/blog-column-three"));
const OnlineCourseBlogColumnFour = lazy(() => import("./pages/Sql-Injection/blog-column-four"));
const OnlineCourseBlogDetail = lazy(() => import("./pages/Sql-Injection/blog-detail"));
const OnlineCourseBlogDetailLeftSidebar = lazy(() => import("./pages/Sql-Injection/blog-detail-left-sidebar"));
const OnlineCourseBlogDetailRightSidebar = lazy(() => import("./pages/Sql-Injection/blog-detail-right-sidebar"));
const OnlineCourseBlogLeftSidebar = lazy(() => import("./pages/Sql-Injection/blog-left-sidebar"));
const OnlineCourseContact = lazy(() => import("./pages/Sql-Injection/contact"));
const DosMainPage = lazy(() => import("./pages/DosMain"));
const NotFound = lazy(() => import("./pages/404"));
const TerminalPage = lazy(() => import("./pages/Terminal/TerminalPage"));

function App() {
  return (
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
        path="/signup"
        element={
          <Suspense fallback={<Loading />}>
            <Signup />
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
          path="course-detail"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseDetail />
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
          path="instructor-detail"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseInstructorDetail />
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
          path="blog-detail"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogDetail />
            </Suspense>
          }
        />
        <Route
          path="blog-detail-left-sidebar"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogDetailLeftSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-detail-right-sidebar"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogDetailRightSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-left-sidebar"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogLeftSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-column-one"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogColumnOne />
            </Suspense>
          }
        />
        <Route
          path="blog-column-two"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogColumnTwo />
            </Suspense>
          }
        />
        <Route
          path="blog-column-three"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogColumnThree />
            </Suspense>
          }
        />
        <Route
          path="blog-column-four"
          element={
            <Suspense fallback={<Loading />}>
              <OnlineCourseBlogColumnFour />
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
        path="/404"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
      </Routes>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import LoginStaff from './pages/LoginStaff.jsx'
import LoginStudent from './pages/LoginStudent.jsx'
import TeacherDashboard from './pages/TeacherDashboard.jsx'
import FlagDetail from './pages/FlagDetail.jsx'
import AdminSettings from './pages/AdminSettings.jsx'
import StudentHome from './pages/StudentHome.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login/staff" element={<LoginStaff />} />
      <Route path="/login/student" element={<LoginStudent />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/flags/learner-01" element={<FlagDetail />} />
      <Route path="/settings/thresholds" element={<AdminSettings />} />
      <Route path="/student" element={<StudentHome />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

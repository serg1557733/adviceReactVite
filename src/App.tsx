import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TipBox from './components/TipBox'
import Arc from './components/visualComponents/Arc'
import LLine from './components/visualComponents/LLine'
import Rounds from './components/visualComponents/Rounds'
import Wave from './components/visualComponents/Wave'

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <section className="main_section">
                <Wave />
                <div className="container">
                    <LLine />
                    <div className="layout">
                        <TipBox />
                    </div>
                    <Rounds />
                    <Arc />
                </div>
            </section>
        </QueryClientProvider>
    )
}

export default App

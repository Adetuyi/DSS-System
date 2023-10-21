import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Playground, Home, PageNotFound } from './pages';
import { ApplyLayout } from './layout';
import { Approutes } from './constants';
import { GlobalStyles, theme } from './base';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<BrowserRouter>
					<Routes>
						{/* Playground page for developers */}
						{/* Not visible in production */}
						{process.env.NODE_ENV === 'development' && <Route path={Approutes.playground} element={<Playground />} />}

						{/* Use default layout on theses pages */}
						<Route element={<ApplyLayout />}>
							<Route path={Approutes.home} element={<Home />} />
						</Route>

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>

				<ToastContainer limit={1} autoClose={3000} newestOnTop={true} closeButton={false} position="top-center" hideProgressBar={true} />
			</ThemeProvider>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;

import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: {
    default: '멋쟁이 사자처럼 커뮤니티 - 멋사컴즈',
    template: '%s | 멋사컴즈',
  },
  description: "유용한 정보를 나누고 공유하세요.",
  keywords: '커뮤니티, 소통, 포럼, 관심사, 온라인 모임, 커뮤니티 서비스',
  authors: [{ name: 'Front End Boot Camp' }],

  openGraph: {
    title: '멋사컴즈에 오신걸 환영합니다.',
    description: '',
    images: ['/images/febc.png'],
    url: 'https://board.fesp.shop',
    type: 'website',
    siteName: '멋사컴즈'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root">
          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
            <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
              <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
                <div className="w-1/2 order-1 md:w-auto">
                  <Link href="/" className="flex items-center gap-2">
                    <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" width="40" height="40" alt="로고 이미지" />
                    <span className="text-lg font-bold">멋사컴</span>
                  </Link>
                </div>
                <div className="w-auto order-2 text-base mt-4 md:mt-0">
                  <ul className="flex items-center gap-6 uppercase">
                    <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
                    <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
                    <li className="hover:text-amber-500 a:font-semibold"><Link href="/qna">질문게시판</Link></li>
                  </ul>
                </div>

                <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

                  <div className="flex justify-end">
                    <Link href="/user/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</Link>
                    <Link href="/user/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</Link>
                  </div>

                  <button
                    type="button"
                    data-toggle-dark="dark"
                    className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      data-toggle-icon="moon"
                      className="w-3.5 h-3.5 hidden"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                    </svg>
                    <svg
                      data-toggle-icon="sun"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                    </svg>
                    <span className="sr-only">Toggle dark/light mode</span>
                  </button>

                </div>
              </nav>
            </header>

            { children }          
              
            <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
              <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</Link>
                <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

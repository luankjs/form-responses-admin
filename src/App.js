import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('dark', 'dark:bg-slate-900');
  }, [])

  return (
    <div className='overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem] h-screen flex items-center justify-center'>
      <div className="sm:px-2 lg:relative lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4">
          <div className="relative z-10 text-center">
            <img alt="" src="/bg.png" width="530" height="530" decoding="async" data-nimg="future" class="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"/>
            <div class="relative">
              <p class="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Gestor de Respostas de Formulários
              </p>
              <p class="mt-3 text-2xl tracking-tight text-slate-400">
                A plataforma que faltava para gerenciar as respostas de seus formulários do Google
              </p>
              <div class="mt-8 flex gap-4 justify-center">
                <a class="rounded-full bg-sky-300 py-3 px-5 text-md font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500" href="/">Tenho interesse!</a>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div class="relative">
              <img alt="" src="/bg-2.png" width="530" height="530" decoding="async" data-nimg="future" class="absolute -top-64 -right-64"/>
              <img alt="" src="/bg-3.png" width="567" height="567" decoding="async" data-nimg="future" class="absolute -bottom-40 -right-44"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

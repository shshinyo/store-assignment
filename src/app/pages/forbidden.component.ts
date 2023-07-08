import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <img
        class="sm:h-2/3 md:h-1/2 w-auto h-auto"
        src="assets/images/403 Error Forbidden-bro.svg"
        alt="Not found"
      />
      <button
        class="w-44 h-10 font-semibold text-base border-2 border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white ease-in-out rounded"
        routerLink="/"
      >
        Back
      </button>
    </div>
  `,
})
export class ForbiddenComponent {}

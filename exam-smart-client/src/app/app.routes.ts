import { Routes } from '@angular/router';
import { ParticipantPortalComponent } from './participant-portal/participant-portal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { SelectQuestionPaperComponent } from './select-question-paper/select-question-paper.component';
import { SelectLanguageComponent } from './select-language/select-language.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'participant-portal',
        component: ParticipantPortalComponent,
        children: [
            { path: 'select-exam', component: SelectExamComponent },
            { path: 'select-question-paper', component: SelectQuestionPaperComponent },
            { path: 'select-language', component: SelectLanguageComponent },]
    }
];

import { Component, inject, OnInit } from '@angular/core';
import { TeamSection } from '../../core/models/team-section';
import { TeamService } from '../../shared/services/team/team-service.service';
import { TeamMember } from '../../core/models/team-member';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly teamService = inject(TeamService);

  teamSections: TeamSection[] = [];
  selectedMember?: TeamMember;

  openMemberModal(member: TeamMember): void {
    this.selectedMember = member;
  }

  ngOnInit(): void {

    this.teamService.getTeam()
      .subscribe(response => {
        this.teamSections = response.sections;
      });

  }

}

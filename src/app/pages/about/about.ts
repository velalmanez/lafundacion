import { Component, inject, OnInit } from '@angular/core';
import { TeamSection } from '../../core/models/team-section';
import { TeamMember } from '../../core/models/team-member';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About{

  teamSections: TeamSection[] = [
    {
      title: 'MESA DIRECTIVA DE LA FUNDACIÓN',
      members: [
        {
          name: 'ADRIÁN PARRA',
          role: 'Presidente',
          photo: '',
          description:''
        },
        {
          name: 'IVÁN VELÁZQUEZ',
          role: 'Vicepresidente',
          photo: '',
          description:''
        },
        {
          name: 'GUILLERMO ORTIZ',
          role: 'Tesorero',
          photo: '',
          description:''
        },
        {
          name: 'CARMEN PARRA',
          role: 'Tesorero',
          photo: '',
          description:''
        },
        { name: 'GILBERTO PARRA', role: 'Secretario General', photo: '' },
        { name: 'VIC PARRA', role: 'Secretario General', photo: '' },
        { name: 'PATRICIA SILVA', role: 'Secretario General', photo: '' }
      ]
    },
    {
      title: 'DIRECCIÓN Y COORDINACIÓN GENERAL DEL LABORATORIO DE LA FUNDACIÓN',
      members: [
        { name: 'Rahmar Villegas', role: 'Director General', photo: 'assets/team/rahmar.jpg' },
        { name: 'Ximena Ortiz', role: 'Coordinadora General', photo: 'assets/team/ximena.jpg' }
      ]
    },
    {
      title: 'Subcoordinadores',
      members: [
        { name: 'Patricia Silva', role: 'Subcoordinadora', photo: 'assets/team/patricia.jpg' },
        { name: 'Sebastián Soto', role: 'Subcoordinador', photo: 'assets/team/sebastian.jpg' },
        { name: 'Iván Velázquez', role: 'Subcoordinador', photo: 'assets/team/ivan.jpg' },
        { name: 'Luis Martínez', role: 'Subcoordinador', photo: 'assets/team/luis.jpg' }
      ]
    },
    {
      title: 'Aspirantes',
      members: [
        { name: 'Edgar Ramírez', role: 'Aspirante' },
        { name: 'Enrique Soto', role: 'Aspirante' },
        { name: 'David Martínez', role: 'Aspirante' },
        { name: 'Shelly Aguilar', role: 'Aspirante' },
        { name: 'Jeanette Murillo', role: 'Aspirante' },
        { name: 'Kevin Martínez', role: 'Aspirante' }
      ]
    }
  ];

  selectedMember?: TeamMember;

  openMemberModal(member: TeamMember): void {
    this.selectedMember = member;
  }

  trackByTitle(_: number, item: TeamSection) {
    return item.title;
  }

  trackByName(_: number, item: TeamMember) {
    return item.name;
  }

  private findSection(title: string): TeamSection | undefined {
    return this.teamSections.find(s => s.title === title);
  }

  getTop(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /\bPresidente\b/i.test(m.role));
  }

  getVice(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /\bVicepresidente\b/i.test(m.role));
  }

  getTreasurers(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /tesor/i.test(m.role));
  }

  getSecretaries(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /secretario/i.test(m.role));
  }
}

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
          role: 'Tesorera',
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
        { name: 'PATRICIA SILVA', role: 'Director General', photo: '' },
        { name: 'IVÁN VELÁZQUEZ', role: 'Director General', photo: '' }
      ]
    },
    {
      title: 'DIRECCIÓN GENERAL',
      members: []
    },
    {
      title: 'COORDINACIÓN GENERAL',
      members: [
        { name: 'XIMENA ORTIZ', role: 'Coordinadora General', photo: ''},
        { name: 'EDGAR RAMIREZ', role: 'Coordinador General', photo: '' },
        { name: 'LUIS MARTÍNEZ', role: 'Coordinador General', photo: '' },
      ]
    },
    {
      title: 'SUBCOORDINADORES',
      members: [
        { name: 'ENRIQUE SOTO', role: 'Subcoordinador' },
        { name: 'SHELLY AGUILAR', role: 'Subcoordinadora' },
        { name: 'SHARON AGUILAR', role: 'Subcoordinadora' },
        { name: 'RODRIGO BARRERA', role: 'Subcoordinador' },
        { name: 'IVÁN MONTES', role: 'Subcoordinador' },
      ]
    },
    {
      title: 'COLABORADORES',
      members: [
        { name: 'MARTÍN LOPEZ', role: 'Colaborador' },
        { name: 'ARTURO HURTADO', role: 'Colaborador' },
        { name: 'JEANETTE MURILLO', role: 'Colaborador' },
        { name: 'ERIKA ORTEGA', role: 'Colaborador' },
        { name: 'MELANIE ACOSTA', role: 'Colaborador' },
        { name: 'YULIANA ACOSTA', role: 'Colaborador' }
      ]
    },
    {
      title: 'AMIGOS DE LA FUNDACIÓN',
      members: [
        { name: 'JUAN SOTELO', role: 'Amigo' },
        { name: 'ADRIÁN GARCIA', role: 'Amigo' },
        { name: 'MIGUEL JUÁREZ', role: 'Amigo' }
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

  getTopDir(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /\bDirector General\b/i.test(m.role));
  }

  getCoordinationGeneral(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /\bCoordinador/i.test(m.role));
  }

  getSubCoordination(section: TeamSection): TeamMember[] {
    return section.members.filter(m => /\bSubcoordinador/i.test(m.role));
  }
}

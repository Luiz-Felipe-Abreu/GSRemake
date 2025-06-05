export type TabParamList = {
  'Início': undefined;
  'Sensores': undefined;
  'Alertas': undefined;
  'Eventos': undefined;
  'Config': undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  Perfil: undefined;
  Sobre: undefined;
};
export interface Alerta {
  id: string;
  tipo: string;
  titulo: string;
  evento: string;
  data: string;
  hora: string;
  urgencia: string;
}
export interface DashboardAlerta {
  id: number;
  tipo: string;
  titulo: string;
  urgencia: string;
  data: string;
  hora: string;
}

export interface DashboardSensor {
  id: number;
  nome: string;
  data: string;
  hora: string;
  valor: string;
}

export interface DashboardEvento {
  id: number;
  tipo: string;
  risco: string;
  data: string;
  hora: string;
  descricao: string;
  cor: string;
}
export interface Evento {
  id: string;
  tipo: string;
  local: string;
  nivelRisco: string;
  detalhes: string;
  data: string;
  hora: string;
}
export interface Sensor {
  id: string;
  tipo: string;
  localizacao: string;
  status: string;
}
'use client';

import { motion } from 'framer-motion';
import { DeforestationData } from '@/types/DeforestationData';

interface StateCardProps {
  data: DeforestationData;
}

const StateCard = ({ data }: StateCardProps) => {
  return (
    <div className="group bg-brand-surface hover:border-brand-primary relative rounded-lg border border-gray-700 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative z-10">
        <h3 className="text-brand-primary text-2xl font-semibold">
          {data.regiao}
        </h3>
        <p className="text-brand-text-muted mt-1">Ano: {data.ano}</p>
        <div className="mt-6">
          <p className="text-brand-text text-5xl font-bold">
            {data.areaDesmatada.toLocaleString('pt-BR')}
          </p>
          <p className="text-brand-text-muted mt-1 text-sm tracking-wider uppercase">
            km² desmatados
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateCard;

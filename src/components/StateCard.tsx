"use client";

import { motion } from "framer-motion";
import { DeforestationData } from "@/types/DeforestationData";

interface StateCardProps {
    data: DeforestationData;
}

const StateCard = ({ data }: StateCardProps) => {
    return (
        <div className="group relative bg-brand-surface rounded-lg p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:border-brand-primary hover:-translate-y-1">
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-brand-primary">
          {data.regiao}
        </h3>
        <p className="text-brand-text-muted mt-1">Ano: {data.ano}</p>
        <div className="mt-6">
          <p className="text-5xl font-bold text-brand-text">
            {data.areaDesmatada.toLocaleString('pt-BR')}
          </p>
          <p className="text-sm text-brand-text-muted uppercase tracking-wider mt-1">
            km² desmatados
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateCard;
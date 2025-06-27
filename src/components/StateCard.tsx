"use client";

import { motion } from "framer-motion";
import { DeforestationData } from "@/types/DeforestationData";

interface StateCardProps {
    data: DeforestationData;
}

const StateCard = ({ data }: StateCardProps) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, y: -5 }} //Efeito para o Houver
            transition={{ type: "spring", stiffness: 300 }}
        >
            <h3 className="text-2xl font-bold text-emerald-400">{data.estado}</h3>
            <p className="text-gray-400 mt-1">Ano: {data.ano}</p>
            <div className="mt-4">
                <p className="text-4xl font-light">
                {data.areaDesmatadaKm2.toLocaleString('pt-BR')}
                </p>
                <p className="text-sm text-gray-500">km² desmatados</p>
            </div>
        </motion.div>
    );
};

export default StateCard;
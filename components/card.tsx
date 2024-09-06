import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  animate?: any;
  transition?: any;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variants, 
  animate, 
  transition 
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-white to-gray-50 p-6 border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
      variants={variants}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export const FeatureCard: React.FC<CardProps & { icon: React.ElementType; title: string; description: string }> = ({
  icon: Icon,
  title,
  description,
  ...props
}) => {
  return (
    <Card className="bg-gradient-to-tr from-blue-50 to-indigo-50" {...props}>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export const TestimonialCard: React.FC<CardProps & { name: string; role: string; testimonial: string }> = ({
  name,
  role,
  testimonial,
  ...props
}) => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-teal-50" {...props}>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="relative">
        <span className="absolute top-0 left-0 text-6xl text-green-200 opacity-50">"</span>
        <p className="text-gray-800 italic relative z-10 pl-8">{testimonial}</p>
        <span className="absolute bottom-0 right-0 text-6xl text-green-200 opacity-50">"</span>
      </div>
    </Card>
  );
};

export const StepCard: React.FC<CardProps & { step: number; title: string; description: string; isActive: boolean }> = ({
  step,
  title,
  description,
  isActive,
  ...props
}) => {
  return (
    <Card 
      className={`bg-gradient-to-br ${isActive ? 'from-purple-100 to-pink-100 border-purple-300' : 'from-gray-50 to-gray-100'}`} 
      {...props}
    >
      <motion.div
        className={`text-3xl font-bold mb-4 w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.5 }}
      >
        {step}
      </motion.div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

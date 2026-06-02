'use client';

import {
  Pill, FlaskConical, Truck, Stethoscope, Syringe, Ambulance,
  Bandage, Thermometer, Droplet, HeartPulse, Sparkles, Sun, Baby, Cross,
} from 'lucide-react';

const map = {
  Pill, FlaskConical, Truck, Stethoscope, Syringe, Ambulance,
  Bandage, Thermometer, Droplet, HeartPulse, Sparkles, Sun, Baby, Cross,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Pill;
  return <Cmp {...props} />;
}

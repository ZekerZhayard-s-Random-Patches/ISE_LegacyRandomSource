
var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");

function initializeCoreMod() {
    return {
        "LegacyRandomSource": {
            "target": {
                "type": "CLASS",
                "name": "net/minecraft/world/level/levelgen/LegacyRandomSource"
            },
            "transformer": function (cn) {
                for (var mnItr = cn.methods.iterator(); mnItr.hasNext();) {
                    var mn = mnItr.next();
                    if (mn.name.equals(ASMAPI.mapMethod("m_188584_")) && mn.desc.equals("(J)V") || mn.name.equals(ASMAPI.mapMethod("m_64707_")) && mn.desc.equals("(I)I")) {
                        mn.access |= Opcodes.ACC_SYNCHRONIZED;
                    }
                }
                return cn;
            }
        }
    }
}
